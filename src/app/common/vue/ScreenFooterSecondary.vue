<docs></docs>

<template>
  <div class="vc screen-footer__block--secondary">
    <div role="list">
      <div
        v-for="(item, i) in $props.items"
        :key="i"
        role="listitem"
      >
        <a
          :href="item.url"
          :target="item.target === '_blank' ? '_blank' : null"
          :rel="item.target === '_blank' ? 'noopener' : null"
        >
          <span>{{item.name}}</span>
        </a>
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
    'items': {
      type: Array,
      default: function() {
        return [];
      },
    },
  },
  data: function() {
    return {};
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
  methods: {},
};
</script>

<style lang="scss" scoped>
@use "sass:math";

.screen-footer__block--secondary {
  padding-block: 1.6rem;
  padding-inline: .8rem;
  background-color: #424242;
  color: #fff;

  [role="list"] {
    margin-inline: auto;
    width: min(100%, 56.8rem);
    display: flex;
    justify-content: space-between;
    align-items: center;

    &::before,
    &::after {
      display: block;
      width: .1rem;
      height: 1rem;
      background-color: #9e9e9e;
      content: "";
    }

    &::before {
      order: 2;
    }

    &::after {
      order: 4;
    }
  }

  [role="listitem"] {
    @media (min-width: 641px) {
      font-size: 1.4rem;
    }

    @media (max-width: 640px) {
      font-size: 1rem;
    }

    &:nth-child(1) {
      order: 1;
    }

    &:nth-child(2) {
      order: 3;
    }

    &:nth-child(3) {
      order: 5;
    }
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
}
</style>
