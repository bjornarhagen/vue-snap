import { boolean } from '@storybook/addon-knobs'

// Components
import Carousel from '../components/Carousel.vue'
import Slide from '../components/Slide.vue'

// Mocks
import carouselMock from '../mocks/carousel.js'

// Custom directive
import lazy from '../directives/lazy'

// Custom Demo CSS
import '../../dist/vue-snap.css'
import '../assets/_examples.scss'

export default {
  title: 'Carousel',
	parameters: {
		layout: 'fullscreen'
	}
}

// Needs to be a function, its not working with simple object between stories
const commonProps = () => ({
  isNavigationKnob: {
    default: boolean('Navigation', true)
  }
})

export const Default = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  props: commonProps(),
  template: `
    <carousel
      class="example-default"
      :navigation-arrows="isNavigationKnob"
    >
      <slide
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Multiple = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  props: commonProps(),
  template: `
    <carousel
      class="example-multiple example-default"
      :navigation-arrows="isNavigationKnob"
    >
      <slide
        v-for="{ id, content } in carouselMock"
        :key="id"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const NonRegular = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  props: commonProps(),
  template: `
    <carousel
      class="example-default"
      :navigation-arrows="isNavigationKnob"
    >
      <slide
        v-for="{ id, content, width } in carouselMock"
        :key="id"
        :style="{ flexBasis: width + 'px' }"
      >
        {{ content }}
      </slide>
    </carousel>
  `
})

export const Images = () => ({
  data: () => ({ carouselMock }),
  components: { Carousel, Slide },
  props: commonProps(),
  template: `
    <carousel
      class="example-images example-multiple"
      :navigation-arrows="isNavigationKnob"
    >
      <slide
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <img
          class="example-images__image"
          :src="image"
          :alt="name"
        />
      </slide>
    </carousel>
  `
})

export const Lazy = () => ({
  data: () => ({
    carouselMock
  }),
  components: { Carousel, Slide },
  directives: { lazy },
  props: commonProps(),
  template: `
    <carousel
      class="example-lazy example-images example-multiple"
      :navigation-arrows="isNavigationKnob"
    >
      <slide
        v-for="{ id, content, image, name } in carouselMock"
        :key="id"
      >
        <img
          v-lazy="image"
          class="example-images__image example-lazy__image"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          :alt="name"
        />
      </slide>
    </carousel>
  `
})
