<docs></docs>

<template>
  <nav
    :class="_globalNavigation ? 'global-navigation--active' : null"
    class="vc global-navigation"
    itemscope
    itemtype="http://schema.org/SiteNavigationElement"
  >
    <div>
      <div v-touch:swipe="swipeHandler">
        <div
          class="global-navigation__list"
          role="list"
        >
          <GlobalNavigationItem
            v-for="(item, i) in $data.items"
            :key="i"
            :item="item"
          />
        </div>
        <button
          v-if="$mq === 'hd'"
          v-ripple
          type="button"
          @click="$store.dispatch('globalNavigation', _globalNavigation)"
        >
          <i aria-hidden="true">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              viewBox="0 96 960 960"
              width="40"
            >
              <path
                fill="#fff"
                d="m251.333 851.333-46.666-46.666L433.334 576 204.667 347.333l46.666-46.666L480 529.334l228.667-228.667 46.666 46.666L526.666 576l228.667 228.667-46.666 46.666L480 622.666 251.333 851.333Z"
              />
            </svg>
          </i>
        </button>
        <i
          v-if="$mq === 't' || $mq === 'd'"
          aria-hidden="true"
          role="presentation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="123" viewBox="0 0 3 123">
            <path fill="rgba(255, 255, 255, .64)" d="M1.5 123a1.5 1.5 0 0 1-1.5-1.5V1.5a1.5 1.5 0 1 1 3 0v120a1.5 1.5 0 0 1-1.5 1.5z" />
          </svg>
        </i>
      </div>
    </div>
  </nav>
</template>

<script>
import GlobalNavigationItem from './GlobalNavigationItem';

export default {
  name: '',
  title: '',
  components: {
    GlobalNavigationItem,
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
      items: [],
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
  created: function() {
    this.axios(this.$props.src, {
      baseURL: 'http://localhost:3004',
      method: 'GET',
      headers: {},
      timeout: 60000,
    }).then((response) => {
      console.log(response.data);
      this.$data.items = response.data;
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
  methods: {
    swipeHandler: function(direction) {
      if ((this.$mq === 's' || this.$mq === 't' || this.$mq === 'd') && direction === 'left') {
        this.$store.dispatch('globalNavigation', this._globalNavigation);
      }
      // console.log(direction);  // May be left / right / top / bottom
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.global-navigation {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  pointer-events: none;

  > div {
    height: 100%;

    @media (min-width: 1025px) {
      padding-inline: clamp(1.6rem, 100%, percentage(math.div(36, 1680)));
    }

    > div {
      position: relative;
      height: inherit;
      overflow-y: auto;
      overscroll-behavior-y: contain;
      // scrollbar-gutter: stable;
      opacity: 0;
      visibility: hidden;
      transition: transform .5s cubic-bezier(.19, 1, .22, 1) .25s, opacity .5s cubic-bezier(.19, 1, .22, 1) .25s, visibility .5s cubic-bezier(.19, 1, .22, 1) .25s;
      touch-action: manipulation;
      pointer-events: auto;

      @media (min-width: 1025px) {
        margin-inline: auto;
        width: min(100%, 108rem);
        transform: translateY(100%);
      }

      @media (max-width: 1024px) and (min-width: 641px) {
        width: 64rem;
      }

      @media (max-width: 640px) {
        width: calc(100% * 0.8);
      }

      @media (max-width: 1024px) {
        background-color: #212121;
        transform: translateX(-100%);
      }
    }
  }

  &--active {
    > div {
      > div {
        opacity: 1;
        visibility: visible;

        @media (min-width: 1025px) {
          transform: translateY(0);
        }

        @media (max-width: 1024px) {
          transform: translateX(0);
        }
      }
    }
  }

  button {
    position: absolute;
    z-index: 1;
    top: 6rem;
    right: 0;
    width: 5rem;
    height: 5rem;
    border: solid .3rem #fff;
    border-radius: 100%;
    background-color: #000;
    color: #fff;
    touch-action: manipulation;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

    display: grid;
    place-items: center;
  }

  [role="presentation"] {
    @media (min-width: 1025px) {
      display: none;
    }

    @media (max-width: 1024px) {
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }

  &__list {
    color: #fff;

    @media (min-width: 1025px) {
      column-count: 3;
    }

    @media (max-width: 1024px) and (min-width: 641px) {
      column-count: 2;
      padding-inline: 2.4rem;
    }

    @media (min-width: 641px) {
      padding-block: 8rem 4rem;
    }
  }
}
</style>
