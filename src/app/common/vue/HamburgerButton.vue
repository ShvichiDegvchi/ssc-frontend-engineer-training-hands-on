<docs></docs>

<template>
  <button
    v-ripple
    class="vc hamburger-btn"
    type="button"
    @click="hamburgerMenuToggle"
  >
    <span
      :class="_globalNavigation ? 'this-active' : null"
      role="presentation"
    >
      <span />
      <span />
      <span />
    </span>
  </button>
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
    this.$nextTick(function() {});
  },
  beforeUpdate: function() {},
  updated: function() {},
  activated: function() {},
  deactivated: function() {},
  beforeDestroy: function() {},
  destroyed: function() {},
  methods: {
    hamburgerMenuToggle: function() {
      this.$store.dispatch('globalNavigation', this._globalNavigation);
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.hamburger-btn {
  display: grid;
  place-items: center;
  border-radius: 100%;
  background-color: #fff;
  touch-action: manipulation;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  @media (min-width: 641px) {
    width: 5.6rem;
    height: 5.6rem;
  }

  @media (max-width: 640px) {
    width: 4rem;
    height: 4rem;
  }

  > span {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 2rem;
    height: 1.4rem;
    transition: transform .5s cubic-bezier(.71, .1, .64, .89);

    span {
      display: block;
      height: .2rem;
      background-color: #212121;
      transition: transform .25s cubic-bezier(.71, .1, .64, .89);

      &:nth-child(1) { transform-origin: 0 50%; }
      &:nth-child(2) { transform-origin: 50% 50%; }
      &:nth-child(3) { transform-origin: 100% 50%; }
    }

    &::before,
    &::after {
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 0;
      margin-block-start: -.1rem;
      width: 100%;
      height: .2rem;
      background-color: #212121;
      content: "";
      transition: transform .25s .5s;
      transform: scaleX(0);
    }

    &.this-active {
      transform: rotate(360deg);

      &::before {
        animation: left forwards .25s 1 cubic-bezier(.71, .1, .64, .89) .25s alternate;
      }

      span {
        transform: scaleX(0);

        &:nth-child(1) { transition-delay: .25s; }
        &:nth-child(3) { transition-delay: .25s; }
      }

      &::after {
        animation: right forwards .25s 1 cubic-bezier(.71, .1, .64, .89) .25s alternate;
      }
    }
  }

  @keyframes left {
    0% {
      transform: scaleX(0);
    }

    50% {
      transform: scaleX(1);
      transform: rotate(0);
    }

    100% {
      transform: rotate(-45deg);
    }
  }

  @keyframes right {
    0% {
      transform: scaleX(0);
    }

    50% {
      transform: scaleX(1);
      transform: rotate(0);
    }

    100% {
      transform: rotate(45deg);
    }
  }
}
</style>
