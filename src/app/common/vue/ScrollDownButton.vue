<docs></docs>

<template>
  <button
    class="vc scroll-down-btn"
    v-scroll-to="'#news-section'"
  >
    <i v-ripple>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        viewBox="0 0 48 48"
      >
        <path fill="#fff" d="M24 44q-5.9 0-9.95-4.05Q10 35.9 10 30V17q0-5.9 4.05-9.95Q18.1 3 24 3q5.9 0 9.95 4.05Q38 11.1 38 17v13q0 5.9-4.05 9.95Q29.9 44 24 44Zm1.5-27H35q0-4.05-2.65-7.2-2.65-3.15-6.85-3.7ZM13 17h9.5V6.1q-4.2.55-6.85 3.7Q13 12.95 13 17Zm11 24q4.55 0 7.775-3.225Q35 34.55 35 30V20H13v10q0 4.55 3.225 7.775Q19.45 41 24 41Zm0-21Zm1.5-3Zm-3 0Zm1.5 3Z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        viewBox="0 0 48 48"
      >
        <path fill="#fff" d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z" />
      </svg>
    </i>
    <span>Scroll Down</span>
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

.scroll-down-btn {
  display: block;
  margin-inline: auto;
  background-color: transparent;
  color: #fff;

  i {
    display: grid;
    margin-inline: auto;
    place-items: center;
    border-radius: 100%;

    @media (min-width: 641px) {
      width: 9rem;
      height: 9rem;
      border: .4rem solid currentColor;
    }

    @media (max-width: 640px) {
      width: 5.6rem;
      height: 5.6rem;
      border: .3rem solid currentColor;
    }
  }

  svg {
    &:first-child {
      transform: translateY(12.5%);

      @media (max-width: 640px) {
        display: none;
      }
    }

    &:last-child {
      animation: scroll-prompter 1.25s ease-in-out infinite;
    }

    @media (max-width: 640px) {
      width: 4rem;
      height: 4rem;
    }
  }

  span {
    display: block;
    margin-block-start: .8rem;

    @media (max-width: 640px) {
      font-size: 1.2rem;
    }
  }
}

@keyframes scroll-prompter {
  0% {
    transform: translateY(-2.5%);
  }
  50% {
    transform: translateY(17.5%);
  }
  100% {
    transform: translateY(-2.5%);
  }
}
</style>
