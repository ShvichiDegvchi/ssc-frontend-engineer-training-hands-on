<docs></docs>

<template>
  <div class="vc screen-footer__block--primary">
    <div role="list">
      <ScreenFooterPrimaryItem
        v-for="(item, i) in $props.items"
        :key="i"
        :item="item"
      />
    </div>
  </div>
</template>

<script>
import ScreenFooterPrimaryItem from './ScreenFooterPrimaryItem';

export default {
  name: '',
  title: '',
  components: {
    ScreenFooterPrimaryItem,
  },
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

.screen-footer__block--primary {
  background-color: #616161;
  color: #fff;

  @media (min-width: 641px) {
    padding-block: 4rem;
    padding-inline: clamp(1.6rem, 100%, percentage(math.div(36, 1680)));
  }

  > [role="list"] {
    @media (min-width: 641px) {
      margin-inline: auto;
      width: min(100%, 108rem);
      column-count: 3;
    }
  }
}
</style>
