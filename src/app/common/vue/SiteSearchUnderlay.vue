<docs></docs>

<template>
  <div
    v-ripple
    :class="_siteSearch ? 'site-search-underlay--active' : null"
    class="vc site-search-underlay"
    @click="$store.dispatch('siteSearch', _siteSearch)"
  />
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {},
  data: function() {
    return {};
  },
  computed: {
    /**
     * @function _siteSearch
     * @return {boolean}
     */
    _siteSearch: function() {
      return this.$store.getters.siteSearch;
    },
  },
  watch: {},
  beforeCreate: function() {},
  created: function() {},
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

.site-search-underlay {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  background-color: rgba(0, 0, 0, .72);
  backdrop-filter: blur(.4rem);
  color: #fff;
  opacity: 0;
  visibility: hidden;
  transition: transform .5s cubic-bezier(.78, .05, .98, .5), opacity .5s cubic-bezier(.78, .05, .98, .5), visibility .5s cubic-bezier(.78, .05, .98, .5);
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: 1025px) {
    transform: translateY(100%);
  }

  @media (max-width: 1024px) {
    transform: translateX(100%);
  }

  &--active {
    opacity: 1;
    visibility: visible;
    cursor: pointer;

    @media (min-width: 1025px) {
      transform: translateY(0);
    }

    @media (max-width: 1024px) {
      transform: translateX(0);
    }
  }
}
</style>
