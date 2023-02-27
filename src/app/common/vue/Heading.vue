<docs></docs>

<template>
  <div class="vc heading">
    <i aria-hidden="true">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="24" viewBox="0 0 32 24">
        <path fill="#e20a16" d="m955 1136.3-7.9 7.7 7.9 7.4 7.9-7.4-7.9-7.7z" transform="translate(-939 -1136.092)" />
        <path fill="#005092" d="m946.7 1144.4-7.7 7.6 7.7 7.9 7.1-7.4-7.1-8.1zm16.6 0 7.7 7.6-7.7 7.9-7.1-7.4 7.1-8.1z" transform="translate(-939 -1136.092)" />
      </svg>
    </i>

    <component
      :is="`h${$props.level}`"
    >
      <span>
        <slot />
      </span>
      <span v-html="$props.ruby" />
    </component>
  </div>
</template>

<script>
export default {
  name: '',
  title: '',
  components: {},
  filter: {},
  props: {
    level: {
      type: Number,
      default: 2,
    },
    ruby: {
      type: String,
      default: null,
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

.heading {
  i {
    display: block;
    margin-inline: auto;
    width: fit-content;

    @media (min-width: 641px) {
      margin-block-end: 1.6rem;
    }

    @media (max-width: 640px) {
      margin-block-end: .8rem;
    }

    svg {
      @media (min-width: 641px) {
        width: 3.2rem;
        height: 2.4rem;
      }

      @media (max-width: 640px) {
        width: 2.4rem;
        height: 1.8rem;
      }
    }
  }

  h2 {
    span {
      display: block;
      margin-inline: auto;
      width: fit-content;

      &:first-child {
        @media (min-width: 641px) {
          font-size: 4.8rem;
        }

        @media (max-width: 640px) {
          font-size: 2.4rem;
        }
      }

      &:not(:first-child) {
        font-weight: 400;

        @media (min-width: 641px) {
          margin-block-start: 1.8rem;
          font-size: 1.8rem;
        }

        @media (max-width: 640px) {
          font-size: 1.2rem;
        }
      }
    }
  }
}
</style>
