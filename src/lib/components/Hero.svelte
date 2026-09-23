<script lang="ts">
  import Parallax from './Parallax.svelte'
  import Reveal from './Reveal.svelte'
  import { name, role } from '../content'
</script>

<header class="hero" id="top">
  <!-- layered parallax backdrop -->
  <div class="layers" aria-hidden="true">
    <Parallax speed={-0.18} class="layer layer-a"><div class="blob blob-a"></div></Parallax>
    <Parallax speed={0.32} class="layer layer-b"><div class="blob blob-b"></div></Parallax>
    <Parallax speed={0.6} class="layer layer-c"><div class="blob blob-c"></div></Parallax>
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

  .blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(70px);
    opacity: 0.5;
  }
  .blob-a {
    width: 46vw;
    height: 46vw;
    right: -12vw;
    top: -10vw;
    background: radial-gradient(circle at 30% 30%, rgba(0, 229, 229, 0.35), transparent 65%);
  }
  .blob-b {
    width: 40vw;
    height: 40vw;
    left: -14vw;
    bottom: -12vw;
    background: radial-gradient(circle at 60% 60%, rgba(255, 77, 216, 0.28), transparent 65%);
  }
  .blob-c {
    width: 30vw;
    height: 30vw;
    left: 30vw;
    top: 20vh;
    background: radial-gradient(circle at 50% 50%, rgba(43, 46, 51, 0.9), transparent 70%);
    filter: blur(50px);
  }

  .hero-inner {
    position: relative;
    z-index: 1;
    max-width: var(--maxw);
    margin: 0 auto;
    width: 100%;
  }

  .hero-eyebrow {
    margin-bottom: 2rem;
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
