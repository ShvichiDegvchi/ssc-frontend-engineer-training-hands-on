<docs></docs>

<template>
  <div class="vc btn--forward">
    <a
      v-ripple
      :href="$props.href"
    >
      <span>
        <slot />
      </span>
      <i aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
          viewBox="0 0 48 48"
        >
          <path fill="#fff" d="m24 40-2.1-2.15L34.25 25.5H8v-3h26.25L21.9 10.15 24 8l16 16Z" />
        </svg>
      </i>
    </a>
  </div>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    'href': {
      type: String,
      required: true,
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

.btn--forward {
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-inline: auto;
    padding-block: 1rem;
    padding-inline: 1.2rem;
    width: min(100%, 30rem);
    border-radius: 100rem;
    background-color: #005092;
    color: #fff;
    text-decoration: none;

    &::before {
      display: block;
      width: 2rem;
      height: 2rem;
      content: "";
    }

    i {
      display: block;
      width: 2rem;
      height: 2rem;

      svg {
        width: inherit;
        height: inherit;
      }
    }
  }
}
</style>
