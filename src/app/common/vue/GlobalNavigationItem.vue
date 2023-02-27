<docs></docs>

<template>
  <div
    class="vc global-navigation-item"
    role="listitem"
  >
    <header>
      <a
        v-ripple="$mq === 's' ? true : false"
        :class="$data.active ? 'is-active' : null"
        :href="$mq !== 's' ? $props.item.url : !$props.item.items.length ? $props.item.url : null"
        :target="$props.item.target === '_blank' ? '_blank' : null"
        :rel="$props.item.target === '_blank' ? 'noopener' : null"
        itemprop="url"
        @click="toggle"
      >
        <span
          itemprop="name"
          v-html="$props.item.name"
        />
        <i v-if="$props.item.items.length && $mq === 's'" aria-hidden="true" />
      </a>
    </header>

    <div
      v-if="$props.item.items.length && $mq !== 's'"
      class="global-navigation-item__nested"
      role="list"
    >
      <div
        v-for="(item, i) in $props.item.items"
        :key="i"
        role="listitem"
      >
        <a
          :href="item.url"
          :target="item.target === '_blank' ? '_blank' : null"
          :rel="item.target === '_blank' ? 'noopener' : null"
          itemprop="url"
        >
          <span
            itemprop="name"
            v-html="item.name"
          />
        </a>
      </div>
    </div>

    <SlideUpDown
      v-else-if="$props.item.items.length && $mq === 's'"
      :active="$data.active"
      :duration="500"
      class="global-navigation-item__nested"
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
        v-for="(item, i) in $props.item.items"
        :key="i"
        role="listitem"
      >
        <a
          v-ripple
          :href="item.url"
          :target="item.target === '_blank' ? '_blank' : null"
          :rel="item.target === '_blank' ? 'noopener' : null"
        >
          <span>{{item.name}}</span>
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

.global-navigation-item {
  @media (min-width: 641px) {
    break-inside: avoid;
  }

  a {
    color: currentColor;
    text-decoration: none;

    &:hover {
      @media (min-width: 641px) {
        text-decoration: underline;
      }
    }
  }

  header {
    @media (min-width: 641px) {
      padding-inline-start: 1.6rem;
      border-left: .8rem solid #fff;
      font-size: 2.4rem;
      font-weight: 700;
      letter-spacing: 1pt;
    }

    a {
      @media (max-width: 640px) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: .8rem;
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

  + [role="listitem"] {
    @media (min-width: 641px) {
      margin-top: 2.4rem;
    }

    @media (max-width: 640px) {
      border-top: .1rem solid #616161;
    }
  }
}

.global-navigation-item__nested {
  @media (min-width: 641px) {
    margin-block-start: 1.6rem;
    padding-inline-start: 2.4rem;
  }

  @media (max-width: 640px) {
    background-color: #424242;
  }

  [role="listitem"] {
    + [role="listitem"] {
      @media (min-width: 641px) {
        margin-top: 1.6rem;
      }

      @media (max-width: 640px) {
        border-top: .1rem solid #616161;
      }
    }

    &:first-child {
      a {
        padding-inline-start: 1.2rem;
      }
    }

    &:not(:first-child) {
      a {
        padding-inline-start: 1.6rem;
      }
    }
  }

  a {
    @media (max-width: 640px) {
      display: block;
      padding: .8rem;
    }
  }
}
</style>
