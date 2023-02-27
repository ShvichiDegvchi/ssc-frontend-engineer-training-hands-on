<docs></docs>

<template>
  <div
    v-scroll-lock="_globalNavigation"
    :data-scroll-direction="$data.direction ? $data.direction : null"
    class="vc screen"
  >
    <slot name="screen-header" />
    <slot />
    <slot name="screen-footer" />
  </div>
</template>

<script>
import {throttle} from 'throttle-debounce';

export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {},
  data: function() {
    return {
      direction: null,
    };
  },
  computed: {
    /**
     * @function _globalNavigation
     * @return {boolean}
     */
    _globalNavigation: function() {
      return this.$store.getters.globalNavigation;
    },
  },
  watch: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {},
  mounted: function() {
    this.$nextTick(() => {
      let pos = 0;

      window.addEventListener('scroll', throttle(500, () => {
        // ↓方向にスクロールしてる場合
        if (pos < document.documentElement.scrollTop) {
          this.$data.direction = 'down';
        }

        // ↑方向にスクロールしてる場合
        else {
          this.$data.direction = 'up';
        }

        pos = document.documentElement.scrollTop;
      }), false);
    });
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
.screen {
  min-height: 100dvh;
  background-color: #fff;
}
</style>
