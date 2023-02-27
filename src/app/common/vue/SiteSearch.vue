<docs></docs>

<template>
  <div
    :class="_siteSearch ? 'site-search--active' : null"
    class="vc site-search"
  >
    <div>
      <div v-touch:swipe="swipeHandler">
        <form
          :action="$props.action"
          :method="$props.get"
          :name="$props.name"
        >
          <input
            type="text"
            name="search"
            value=""
            placeholder="サイト内検索"
          >

          <button
            v-ripple
            type="submit"
          >
            <i aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="60"
                width="60"
                viewBox="0 0 48 48"
              >
                <path d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z" />
              </svg>
            </i>
          </button>
        </form>
        <i
          v-if="$mq !== 'hd'"
          aria-hidden="true"
          role="presentation"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="123" viewBox="0 0 3 123">
            <path fill="rgba(255, 255, 255, .64)" d="M1.5 123a1.5 1.5 0 0 1-1.5-1.5V1.5a1.5 1.5 0 1 1 3 0v120a1.5 1.5 0 0 1-1.5 1.5z" />
          </svg>
        </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'action': {
      type: String,
      default: null,
    },
    'method': {
      type: String,
      default: 'get',
    },
    'name': {
      type: String,
      default: null,
    },
  },
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
  methods: {
    swipeHandler: function(direction) {
      if ((this.$mq === 's' || this.$mq === 't' || this.$mq === 'd') && direction === 'left') {
        this.$store.dispatch('siteSearch', this._siteSearch);
      }
      // console.log(direction);  // May be left / right / top / bottom
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.site-search {
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
      display: grid;
      place-items: center;
      height: inherit;
      opacity: 0;
      visibility: hidden;
      transition: transform .5s cubic-bezier(.19, 1, .22, 1) .25s, opacity .5s cubic-bezier(.19, 1, .22, 1) .25s, visibility .5s cubic-bezier(.19, 1, .22, 1) .25s;

      @media (min-width: 1025px) {
        margin-inline: auto;
        width: min(100%, 108rem);
        transform: translateY(100%);
      }

      @media (max-width: 1024px) and (min-width: 641px) {
        width: 64rem;
        padding-inline: 1.6rem;
      }

      @media (max-width: 640px) {
        width: calc(100% * 0.8);
        padding-inline: .8rem;
      }

      @media (max-width: 1024px) {
        background-color: #212121;
        transform: translateX(-100%);
        pointer-events: auto;
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

  form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: #fff;
    pointer-events: auto;
  }

  [type="text"] {
    position: relative;
    flex-basis: auto;
    flex-grow: 1;
    display: block;
    border: none;
    border-bottom: 1px solid #616161;
    background: none;
    outline: none;
    transition: border-color .5s ease;

    @media (min-width: 641px) {
      font-size: 3.2rem;
    }

    &:focus {
      border-bottom-color: #fff;
    }
  }

  button {
    flex-basis: auto;
    flex-shrink: 0;
    padding: .8rem;
    background: none;
    border-radius: 100%;

    i {
      svg {
        fill: currentColor;

        @media (max-width: 640px) {
          width: 2.4rem;
          height: 2.4rem;
        }
      }
    }
  }

  [role="presentation"] {
    @media (max-width: 1024px) {
      position: absolute;
      z-index: 1;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
  }
}
</style>
