<docs></docs>

<template>
  <section
    id="news-section"
    class="vc news-section"
  >
    <slot />
  </section>
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

.news-section {
  background-color: #fff;

  @media (min-width: 641px) {
    padding-block: 4rem;
    padding-inline: clamp(1.6rem, 100%, percentage(math.div(36, 1680)));
  }

  @media (max-width: 640px) {
    padding-block: 2.4rem;
    padding-inline: .8rem;
  }
}
</style>
