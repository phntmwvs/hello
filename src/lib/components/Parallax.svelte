<script lang="ts">
  import { createSubscriber } from 'svelte/reactivity'
  import type { Snippet } from 'svelte'

  interface Props {
    /** parallax multiplier; positive = lags behind scroll, negative = leads */
    speed?: number
    class?: string
    children: Snippet
  }

  let { speed = 0.25, class: klass = '', children }: Props = $props()

  let el: HTMLElement = $state(null!)

  // reactive scroll position via a subscriber (rAF-throttled, passive)
  const subscribeScroll = createSubscriber((update) => {
    let raf = 0
    const request = () => {
      if (!raf)
        raf = requestAnimationFrame(() => {
          raf = 0
          update()
        })
    }
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
      if (raf) cancelAnimationFrame(raf)
    }
  })

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const offset = $derived.by(() => {
    subscribeScroll() // re-run on scroll
    if (reduceMotion || !el) return 0
    const r = el.getBoundingClientRect()
    const elCenter = r.top + r.height / 2
    return (elCenter - window.innerHeight / 2) * speed
  })
</script>

<div
  bind:this={el}
  class="parallax {klass}"
  style:transform={reduceMotion ? undefined : `translate3d(0, ${offset.toFixed(2)}px, 0)`}
>
  {@render children()}
</div>

<style>
  .parallax {
    will-change: transform;
  }
  @media (prefers-reduced-motion: reduce) {
    .parallax {
      will-change: auto;
    }
  }
</style>
