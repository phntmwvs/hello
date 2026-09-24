<script lang="ts">
  import Parallax from './Parallax.svelte'
  import Reveal from './Reveal.svelte'
  import { name, role } from '../content'
</script>

<header class="hero" id="top">
  <!-- layered parallax backdrop: full-bleed photo -->
  <div class="layers" aria-hidden="true">
    <Parallax speed={0.35} class="layer layer-bg">
      <img class="hero-bg" src="/img/hero-background.jpg" alt="" fetchpriority="high" />
      <div class="hero-scrim"></div>
    </Parallax>
  </div>

  <div class="hero-inner">
    <Reveal delay={120} y={60}>
      <h1 class="display hero-name">{name}</h1>
    </Reveal>
    <Reveal delay={260} y={40}>
      <p class="hero-role">{role}</p>
    </Reveal>
  </div>

  <div class="scroll-cue" aria-hidden="true">
    <span class="eyebrow">Scroll to explore</span>
    <span class="cue-line"></span>
  </div>
</header>

<style>
  .hero {
    position: relative;
    min-height: 100svh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 var(--gutter);
    overflow: hidden;
  }

  .layers {
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  .layers :global(.layer) {
    position: absolute;
    inset: 0;
  }
  /* photo layer is taller than the hero so parallax translate never exposes a gap */
  .layers :global(.layer-bg) {
    inset: -42vh 0;
  }
  .hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* slight upward bias: keeps the lit angular edge + blue sky in frame */
    object-position: 50% 40%;
  }
  /* dark scrim tuned for a bright architectural photo: heavier behind the
     left-aligned text, lighter over the sky, strong bottom fade into #000 */
  .hero-scrim {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.12) 52%, rgba(0, 0, 0, 0.34) 100%),
      linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.24) 45%, rgba(0, 0, 0, 0.78) 100%);
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    max-width: var(--maxw);
    margin: 0 auto;
    width: 100%;
  }

  .hero-name {
    font-size: clamp(5rem, 22vw, 18rem);
    text-transform: uppercase;
    background: linear-gradient(180deg, var(--ink) 55%, rgba(242, 242, 242, 0.35));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .hero-role {
    margin-top: 1.5rem;
    font-size: clamp(1.1rem, 1rem + 1vw, 1.75rem);
    color: var(--muted);
    letter-spacing: 0.02em;
  }

  .scroll-cue {
    position: absolute;
    bottom: 2.25rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    z-index: 1;
  }
  .cue-line {
    width: 1px;
    height: 56px;
    background: linear-gradient(var(--muted), transparent);
    animation: drip 2.2s ease-in-out infinite;
  }
  @keyframes drip {
    0% {
      transform: scaleY(0);
      transform-origin: top;
    }
    45% {
      transform: scaleY(1);
      transform-origin: top;
    }
    55% {
      transform: scaleY(1);
      transform-origin: bottom;
    }
    100% {
      transform: scaleY(0);
      transform-origin: bottom;
    }
  }
  @media (prefers-reduced-motion: reduce) {
    .cue-line {
      animation: none;
    }
  }
</style>
