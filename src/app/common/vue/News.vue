<docs></docs>

<template>
  <div class="vc news">
    <div
      class="news__tablist"
      role="tablist"
    >
      <button
        v-ripple
        :aria-selected="this.$data.tab === 'news-tabpanel-01' ? 'true' : 'false'"
        aria-controls="news-tabpanel-01"
        id="news-tab-01"
        type="button"
        role="tab"
        @click="init"
      >
        すべて
      </button>
      <button
        v-ripple
        :aria-selected="this.$data.tab === 'news-tabpanel-02' ? 'true' : 'false'"
        aria-controls="news-tabpanel-02"
        id="news-tab-02"
        type="button"
        role="tab"
        @click="pressRelease"
      >
        プレス・リリース
      </button>
      <button
        v-ripple
        :aria-selected="this.$data.tab === 'news-tabpanel-03' ? 'true' : 'false'"
        aria-controls="news-tabpanel-03"
        id="news-tab-03"
        type="button"
        role="tab"
        @click="news"
      >
        ニュース
      </button>
      <button
        v-ripple
        :aria-selected="this.$data.tab === 'news-tabpanel-04' ? 'true' : 'false'"
        aria-controls="news-tabpanel-04"
        id="news-tab-04"
        type="button"
        role="tab"
        @click="other"
      >
        その他
      </button>
    </div>
    <div
      :id="this.$data.tab"
      :aria-labelledby="this.$data.tabPanel"
      role="tabpanel"
      class="news__panel"
    >
      <transition-group
        role="list"
        name="panel__list"
        mode="out-in"
      >
        <div
          v-for="(item, i) in $data.results.slice(0, 6)"
          :key="`news-list-${i}`"
          class="panel__list-item"
          role="listitem"
        >
          <a
            v-ripple
            :href="item.url"
            :target="item.target === '_blank' ? '_blank' : null"
            :rel="item.target === '_blank' ? 'noopener' : 'bookmark'"
          >
            <div>
              <time :datetime="$dayjs(item.date).format()">{{$dayjs(item.date).format('YYYY年MM月DD日')}}</time>
              <i :style="{ backgroundColor: item.tag.hex }">
                <span>{{item.tag.name}}</span>
              </i>
            </div>
            <div>
              <p>{{item.name}}</p>
            </div>
          </a>
        </div>
      </transition-group>
    </div>
    <ForwardButton
      v-if="$data.more"
      :href="$data.more"
    >
      一覧へ
    </ForwardButton>
  </div>
</template>

<script>
import ForwardButton from './ForwardButton';

export default {
  name: '',
  title: '',
  components: {
    ForwardButton,
  },
  filter: {},
  props: {
    'src': {
      type: String,
      required: true,
    },
  },
  data: function() {
    return {
      tab: 'news-tabpanel-01',
      tabPanel: 'news-tab-01',
      results: [],
      category: {
        init: [],
        pressRelease: [],
        news: [],
        other: [],
      },
      more: '',
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {
    this.reqestNewsJson();
  },
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(function() {});
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {
    /**
     * @function init
     * @param {object} e
     */
    init: function(e) {
      this.$data.results = this.$data.category.init;
      this.$data.more = '';
      this.tabHandler(e);
    },
    /**
     * @function pressRelease
     * @param {object} e
     */
    pressRelease: function(e) {
      this.$data.results = this.$data.category.pressRelease;
      this.$data.more = 'https://www.shinwart.co.jp/press/';
      this.tabHandler(e);
    },
    /**
     * @function news
     * @param {object} e
     */
    news: function(e) {
      this.$data.results = this.$data.category.news;
      this.$data.more = 'https://www.shinwart.co.jp/news/';
      this.tabHandler(e);
    },
    /**
     * @function other
     * @param {object} e
     */
    other: function(e) {
      this.$data.results = this.$data.category.other;
      this.$data.more = 'https://www.shinwart.co.jp/other/';
      this.tabHandler(e);
    },
    /**
     * @function tabHandler
     * @description タブの切り替えだけを行う関数
     * @param {object} e
     */
    tabHandler(e) {
      // イベント発生源の要素を取得
      const el = e.currentTarget;
      // <button></button> の id 属性の値を取得
      const newsTab = el.getAttribute('id');
      // <button></button> の aria-controls 属性の値を取得
      const newsTabPanel = el.getAttribute('aria-controls');
      // プロパティーを更新
      this.$data.tab = newsTabPanel;
      this.$data.tabPanel = newsTab;
    },
    /**
     * @function reqestNewsJson
     */
    reqestNewsJson: function() {
      this.axios(this.$props.src, {
        baseURL: 'http://localhost:3004',
        method: 'GET',
        headers: {},
        timeout: 60000,
      }).then((response) => {
        console.log(response.data);
        this.$data.results = response.data;
        this.$data.category.init = response.data.sort((a, b) => { // 降順に並び替える
          return this.$dayjs(b.date).unix() - this.$dayjs(a.date).unix();
        });
        this.$data.category.pressRelease = response.data.filter((item) => item.category === 'プレス・リリース');
        this.$data.category.news = response.data.filter((item) => item.category === 'ニュース');
        this.$data.category.other = response.data.filter((item) => item.category === 'その他');
      }).finally(() => {
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.news {
  margin-inline: auto;
  width: min(100%, 108rem);

  &__tablist {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.6rem;
    margin-block-start: 1.6rem;
  }

  &__panel {
    margin-block-start: 1.6rem;

    [role="listitem"] {
      border-bottom: .1rem solid #ddd;

      &:last-child {
        border-bottom: none;
      }
    }

    a {
      display: block;
      padding-block: 2.4rem;
      border-radius: .3rem;
      color: currentColor;
      text-decoration: none;

      @media (min-width: 641px) {
        padding-inline: 1.6rem;
        font-size: 1.8rem;
      }

      @media (max-width: 640px) {
        padding-inline: .8rem;
        font-size: 1.4rem;
      }

      > div {
        &:nth-child(1) {
          display: flex;
          align-items: center;
          line-height: 1;
          gap: 1.6rem;
        }

        &:nth-child(2) {
          margin-top: 1.6rem;
          padding-inline-end: 4rem;
          background: no-repeat 100% 50% url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="%23005092" d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z"/></svg>');
          background-size: 2.4rem;

          p {
            @media (max-width: 640px) {
              overflow: hidden;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 3; /* start showing ellipsis when 3rd line is reached */
              white-space: pre-wrap; /* let the text wrap preserving spaces */
            }
          }
        }
      }
    }

    time {
      display: block;

      + i {
        display: block;
        padding-block: .8rem;
        padding-inline: 1.6rem;
        min-width: 10rem;
        border-radius: .3rem;

        span {
          display: inherit;
          color: #fff;
          font-size: #{math.div(1.4, 1.6)}em;
          text-align: center;

        }
      }
    }
  }

  button {
    padding-block: .4rem;
    padding-inline: 2rem;
    border-radius: 100rem;
    background-color: #fff;
    box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);

    @media (min-width: 641px) {
      font-size: 1.8rem;
    }

    &[aria-selected="true"] {
      background-color: #005092;
      color: #fff;
      font-weight: 700;
    }
  }

  ::v-deep .btn--forward {
    margin-top: 1.6rem;
  }

  .panel__list {
    &-enter-active,
    &-leave-active {
      transition: opacity .5s cubic-bezier(.075, .82, .165, 1), transform .5s cubic-bezier(.075, .82, .165, 1);
    }

    &-enter,
    &-leave-to {
      opacity: 0;
      transform: translateY(3.6rem);
    }
  }
}
</style>
