<docs></docs>

<template>
  <div
    :style="{ backgroundImage: `url(${$props.src})` }"
    class="vc hero"
  >
    <div>
      <h1>
        <slot name="title" />
      </h1>
      <p class="tagline">
        <slot name="tagline" />
      </p>
      <ul>
        <li
          v-for="(link, i) in $data.links"
          :key="i"
        >
          <a
            v-ripple
            :href="link.url"
            :target="link.target === '_blank' ? '_blank' : null"
            :rel="link.target === '_blank' ? 'noopener' : null"
          >
            <span v-html="link.name" />
          </a>
        </li>
      </ul>
    </div>
    <ScrollDownButton />
  </div>
</template>

<script>
import ScrollDownButton from './ScrollDownButton';

export default {
  name: '',
  title: '',
  components: {
    ScrollDownButton,
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
      links: [],
    };
  },
  computed: {},
  watch: {},
  beforeCreate: function() {},
  created: function() {},
  beforeMount: function() {
    this.axios('/api/v1/hero-links', {
      baseURL: 'http://localhost:3004',
      method: 'GET',
      headers: {},
      timeout: 60000,
    }).then((response) => {
      console.log(response.data);
      this.$data.links = response.data;
    }).finally(() => {
    });
  },
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

.hero {
  position: relative;
  display: grid;
  place-items: center;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: cover;

  @media (min-width: 641px) {
    height: clamp(76.8rem, 100dvh, 133.6rem);
  }

  @media (max-width: 640px) {
    height: max(56.8rem, 100dvh);
  }

  &::before {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeat 50% 50% url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACAQMAAACjTyRkAAAAA3NCSVQICAjb4U/gAAAABlBMVEUAAAD///+l2Z/dAAAAAnRSTlP/AOW3MEoAAAAJcEhZcwAAAuwAAALsAe0ztPoAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDQvMTMvMTGrW0T6AAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M1cbXjNgAAAAxJREFUCJljYGBoAAAAhACBnGjDJAAAAABJRU5ErkJggg==');
    content: "";
  }

  > div {
    position: relative;
    z-index: 1;

    @media (min-width: 641px) {
      padding-inline: clamp(1.6rem, 100%, percentage(math.div(36, 1680)));
    }

    @media (max-width: 640px) {
      padding-inline: .8rem;
    }
  }

  h1 {
    color: #fff;
    text-align: center;

    @media (min-width: 641px) {
      font-size: 4.8rem;
    }

    @media (max-width: 640px) {
      font-size: 2.7rem;
    }

    + p {
      margin-top: 2.4rem;
    }
  }

  .tagline {
    color: #fff;
    text-align: center;

    @media (min-width: 641px) {
      font-size: 2.4rem;
    }

    @media (max-width: 640px) {
      font-size: 1.7rem;
    }

    br {
      @media (min-width: 769px) {
        display: none;
      }
    }

    + ul {
      margin-block-start: 3.2rem;
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    margin-inline: auto;
    width: min(100%, 79rem);

    @media (min-width: 641px) {
      gap: 1.6rem;
    }

    @media (max-width: 640px) {
      gap: .8rem;
      justify-content: center;
    }

    li {
      a {
        display: block;
        padding-inline: 1.6rem;
        border-radius: 100rem;
        background-color: #fff;
        box-shadow: 0 #{math.div(1, 10)}rem #{math.div(3, 10)}rem rgba(#000, .12), 0 #{math.div(1, 10)}rem #{math.div(2, 10)}rem rgba(#000, .24);
        color: currentColor;
        text-decoration: none;

        span {
          @media (max-width: 640px) {
            font-size: 1rem;
            vertical-align: text-top;
          }
        }
      }
    }
  }

  ::v-deep .scroll-down-btn {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -125%);
  }
}
</style>
