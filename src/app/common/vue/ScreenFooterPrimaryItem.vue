<docs></docs>

<template>
  <div
    class="vc screen-footer-primary-item"
    role="listitem"
  >
    <header>
      <a
        v-ripple="$mq === 's' ? true : false"
        :class="$data.active ? 'is-active' : null"
        :href="$mq !== 's' ? $props.item.url : !$props.item.items.length ? $props.item.url : null"
        :target="$props.item.target === '_blank' ? '_blank' : null"
        :rel="$props.item.target === '_blank' ? 'noopener' : null"
        @click="toggle"
      >
        <span>{{$props.item.name}}</span>
        <i v-if="$props.item.items.length && $mq === 's'" aria-hidden="true" />
      </a>
    </header>

    <div
      v-if="$props.item.items.length && $mq !== 's'"
      role="list"
    >
      <div
        v-for="(childItem, ii) in $props.item.items"
        :key="ii"
        role="listitem"
      >
        <a
          :href="childItem.url"
          :target="childItem.target === '_blank' ? '_blank' : null"
          :rel="childItem.target === '_blank' ? 'noopener' : null"
        >
          <span>{{childItem.name}}</span>
        </a>
      </div>
    </div>

    <SlideUpDown
      v-else-if="$props.item.items.length && $mq === 's'"
      :active="$data.active"
      :duration="500"
      role="list"
    >
      <div role="listitem">
        <a
          v-ripple
          :href="$props.item.url"
          :target="$props.item.target === '_blank' ? '_blank' : null"
          :rel="$props.item.target === '_blank' ? 'noopener' : null"
        >
          <span>{{$props.item.name}} Top</span>
        </a>
      </div>

      <div
        v-for="(childItem, ii) in $props.item.items"
        :key="ii"
        role="listitem"
      >
        <a
          v-ripple
          :href="childItem.url"
          :target="childItem.target === '_blank' ? '_blank' : null"
          :rel="childItem.target === '_blank' ? 'noopener' : null"
        >
          <span>{{childItem.name}}</span>
        </a>
      </div>
    </SlideUpDown>
  </div>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down';

export default {
  name: '',
  title: '',
  components: {
    SlideUpDown,
  },
  filter: {},
  props: {
    'item': {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  data: function() {
    return {
      active: false,
    };
  },
  computed: {},
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
    /**
     * @function toggle
     * @description アコーディオンを開閉する関数
     */
    toggle: function() {
      if (this.$mq === 's') {
        this.$data.active = !this.$data.active;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:math";
.screen-footer-primary-item {
  @media (min-width: 641px) {
    break-inside: avoid;
  }

  @media (max-width: 640px) {
    border-bottom: .1rem solid #9e9e9e;
  }

  + [role="listitem"] {
    @media (min-width: 641px) {
      margin-block-start: 2.4rem;
    }
  }

  header {
    @media (min-width: 641px) {
      border-left: .4rem solid #fff;
      font-weight: 700;
      font-size: 1.8rem;
      line-height: 1;
    }

    @media (min-width: 769px) {
      padding-inline-start: 2rem;
    }

    @media (max-width: 768px) and (min-width: 641px) {
      padding-inline-start: 1rem;
    }

    a {
      @media (max-width: 640px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding-inline: .8rem;
        cursor: pointer;
      }

      &.is-active{
        i {
          transform: rotate(-225deg);
        }
      }

      i {
        position: relative;
        display: block;
        width: 1.2rem;
        height: 1.2rem;
        transition: transform 1s cubic-bezier(.175, .885, .32, 1.275);

        &::before,
        &::after {
          position: absolute;
          background-color: #fff;
          content: "";
        }

        &::before {
          top: 0;
          left: 50%;
          margin-left: -.1rem;
          width: .2rem;
          height: 100%;
        }

        &::after {
          top: 50%;
          left: 0;
          margin-top: -.1rem;
          width: 100%;
          height: .2rem;
        }
      }
    }
  }

  > div {
    &[role="list"] {
      @media (min-width: 641px) {
        margin-top: 1.2rem;
        font-size: 1.4rem;
      }

      [role="listitem"] {
        @media (max-width: 640px) {
          border-top: .1rem solid #9e9e9e;
        }

        &:first-child {
          a {
            @media (max-width: 640px) {
              padding-inline: 1.6rem .8rem;
            }
          }
        }

        &:not(:first-child) {
          a {
            @media (max-width: 640px) {
              padding-inline: 2.4rem .8rem;
            }
          }
        }
      }

      a {
        @media (min-width: 641px) {
          display: inline-block;
          vertical-align: middle;
          padding-block: .4rem;
        }

        @media (min-width: 769px) {
          padding-inline-start: 2.4rem;
        }

        @media (max-width: 768px) and (min-width: 641px) {
          padding-inline-start: 1.6rem;
        }

        @media (max-width: 640px) {
          background-color: #424242;
        }
      }
    }
  }

  a {
    color: currentColor;
    text-decoration: none;

    @media (max-width: 640px) {
      display: block;
      padding-block: .8rem;
    }
  }
}
</style>
