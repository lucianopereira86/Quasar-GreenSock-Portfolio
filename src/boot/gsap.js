/// Injeta o plugin TweenMax no escopo do Vue

import * as gsap from 'gsap/TweenMax'

export default async ({ Vue }) => {
  Vue.prototype.$gsap = gsap
}
