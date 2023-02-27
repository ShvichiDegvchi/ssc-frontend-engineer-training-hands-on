<docs></docs>

<template>
  <footer
    class="vc screen-footer"
    role="contentinfo"
  >
    <ScreenFooterPrimary :items="$data.navigations.primary" />
    <ScreenFooterSecondary :items="$data.navigations.secondary" />
    <small>
      <span>
        <fragment v-if="$mq === 's'">©</fragment>
        <fragment v-else>Copyright ©</fragment>
      </span>
      <time
        :datetime="$dayjs().year()"
        itemprop="copyrightYear"
      >
        <fragment v-if="$mq === 's'">{{$dayjs().year()}}</fragment>
        <fragment v-else>{{`1947 - ${$dayjs().year()}`}}</fragment>
      </time>
      <span itemprop="copyrightHolder" itemscope itemtype="https://schema.org/Organization">
        <span>-</span>
        <span itemprop="name">SUZUYO SHINWART Corp.</span>
        <span v-if="$mq !== 's'">All Rights Reserved.</span>
      </span>
    </small>
  </footer>
</template>

<script>
import ScreenFooterPrimary from './ScreenFooterPrimary';
import ScreenFooterSecondary from './ScreenFooterSecondary';

export default {
  name: '',
  title: '',
  components: {
    ScreenFooterPrimary,
    ScreenFooterSecondary,
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
      navigations: {
        primary: [],
        secondary: [],
      },
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
      this.$data.navigations.primary = response.data.primary;
      this.$data.navigations.secondary = response.data.secondary;
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

.screen-footer {
  small {
    display: inherit;
    padding-block: .8rem;
    background-color: #212121;
    color: #bdbdbd;
    font-size: 1.2rem;
    text-align: center;

    @media (min-width: 641px) {
      font-size: 1.2rem;
    }

    @media (max-width: 640px) {
      font-size: 1rem;
    }
  }
}
</style>
