<script lang="ts">
  import type { Snippet } from 'svelte'

  interface Props {
    /** stagger delay in ms */
    delay?: number
    /** vertical distance to travel on reveal (px) */
    y?: number
    class?: string
    children: Snippet
  }

  let { delay = 0, y = 32, class: klass = '', children }: Props = $props()

  let visible = $state(false)

  function observe(node: HTMLElement) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            visible = true
            io.disconnect()
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(node)
    return () => io.disconnect()
  }
</script>

<div
  {@attach observe}
  class="reveal {klass}"
  class:visible
  style:--delay="{delay}ms"
  style:--y="{y}px"
>
  {@render children()}
</div>

<style>
  .reveal {
    opacity: 0;
    transform: translate3d(0, var(--y, 32px), 0);
    transition:
      opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0ms),
      transform 0.9s cubic-bezier(0.22, 1, 0.36, 1) var(--delay, 0ms);
  }
  .reveal.visible {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  @media (prefers-reduced-motion: reduce) {
    .reveal {
      opacity: 1;
      transform: none;
      transition: none;
    }
  }
</style>
