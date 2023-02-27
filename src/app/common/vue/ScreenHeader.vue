<docs></docs>

<template>
  <header
    class="vc screen-header"
    role="banner"
  >
    <div>
      <mq-layout :mq="['s', 't', 'd']">
        <SiteSearchButton />
      </mq-layout>
      <a href="/" rel="index">
        <Logo />
      </a>
      <fragment v-if="$mq === 'hd'">
        <nav
          itemscope
          itemtype="http://schema.org/SiteNavigationElement"
        >
          <div role="list">
            <div
              v-for="(navigation, i) in $data.navigations"
              :key="`${i}-parent-items`"
              role="listitem"
            >
              <a
                v-ripple
                :href="navigation.url"
                :target="navigation.target === '_blank' ? '_blank' : null"
                :rel="navigation.target === '_blank' ? 'noopener' : null"
                itemprop="url"
              >
                <span
                  itemprop="name"
                  v-html="navigation.name"
                />
              </a>
            </div>
          </div>
        </nav>
      </fragment>
      <mq-layout mq="hd">
        <SiteSearchButton />
      </mq-layout>
      <div>
        <HamburgerButton />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from './Logo';
import SiteSearchButton from './SiteSearchButton';
import HamburgerButton from './HamburgerButton';

export default {
  name: '',
  title: '',
  components: {
    Logo,
    SiteSearchButton,
    HamburgerButton,
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
      navigations: null,
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {
    this.axios(this.$props.src, {
      baseURL: 'http://localhost:3004',
      method: 'GET',
      headers: {},
      timeout: 60000,
    }).then((response) => {
      console.log(response.data);
      this.$data.navigations = response.data;
    }).finally(() => {
    });
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
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.screen-header {
  position: fixed;
  z-index: 10;
  top: 0;
  width: 100%;
  transition: transform .5s cubic-bezier(.25, .46, .45, .94);

  [data-scroll-direction="down"] & {
    transform: translateY(-112.5%);
  }

  @media (min-width: 641px) {
    padding-block-start: 1.6rem;
    padding-inline: clamp(1.6rem, 100%, percentage(math.div(36, 1680)));
  }

  @media (max-width: 640px) {
    padding-block-start: .8rem;
    padding-inline: .8rem;
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    width: min(100%, 168rem);
    background-color: #fff;
    border-radius: 100rem;
    box-shadow: 0 #{math.div(3, 10)}rem #{math.div(6, 10)}rem rgba(#000, .16), 0 #{math.div(3, 10)}rem #{math.div(6, 10)}rem rgba(#000, .23);

    @media (min-width: 1025px) {
      padding-inline-start: 3.2rem;
      padding-inline-end: .8rem;
    }

    @media (max-width: 1024px) and (min-width: 641px) {
      padding-inline: .8rem;
    }

    @media (min-width: 641px) {
      padding-block: .8rem;
    }

    @media (max-width: 640px) {
      padding: .4rem;
    }
  }

  [rel="index"] {
    display: block;
    width: fit-content;
  }

  nav {
    flex-basis: auto;
    flex-grow: 1;
    padding-right: 1.6rem;
    width: fit-content;
    border-right: 1px solid #ddd;

    [role="list"] {
      display: flex;
      justify-content: flex-end;
    }

    // [role="listitem"] {}

    a {
      display: inherit;
      padding-block: .2rem;
      color: currentColor;
      text-decoration: none;
      border-radius: 100rem;

      @media (min-width: 1281px) {
        padding-inline: 2rem;
      }

      @media (max-width: 1280px) and (min-width: 1100px) {
        padding-inline: 1.2rem;
      }

      @media (max-width: 1099px) {
        padding-inline: .8rem;
      }

      span {
        font-size: 1.4rem;
      }
    }
  }

  ::v-deep .app-search-btn {
    @media (min-width: 1025px) {
      margin-inline-start: 1.6rem;
      margin-inline-end: .8rem;
    }
  }
}
</style>
