<script lang="ts">
  import Reveal from './Reveal.svelte'
  import { technologies } from '../content'

  // duplicate the list for a seamless marquee loop
  const loop = [...technologies, ...technologies]
</script>

<section class="tech" id="tech" aria-labelledby="tech-heading">
  <div class="inner">
    <Reveal>
      <p class="eyebrow" id="tech-heading">Technologies</p>
    </Reveal>
  </div>

  <Reveal delay={120}>
    <div class="marquee" aria-label="Technologies I've worked with">
      <div class="track">
        {#each loop as t, i (t + i)}
          <span class="item display" aria-hidden={i >= technologies.length}>{t}</span>
          <span class="sep" aria-hidden="true">·</span>
        {/each}
      </div>
    </div>
  </Reveal>
</section>

<style>
  .tech {
    padding: var(--section-gap) 0;
    overflow: hidden;
  }
  .inner {
    max-width: var(--maxw);
    margin: 0 auto;
    padding: 0 var(--gutter);
  }
  .marquee {
    margin-top: 3rem;
    border-top: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
    padding: 2rem 0;
    overflow: hidden;
    -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
  }
  .track {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    width: max-content;
    animation: scroll 40s linear infinite;
  }
  .item {
    font-size: clamp(2rem, 5vw, 4rem);
    font-weight: 600;
    white-space: nowrap;
    color: var(--faint);
    transition: color 0.3s;
  }
  .item:hover {
    color: var(--ink);
  }
  .sep {
    color: var(--accent);
    font-size: 1.5rem;
  }
  @keyframes scroll {
    to {
      transform: translate3d(-50%, 0, 0);
    }
  }
  .marquee:hover .track {
    animation-play-state: paused;
  }
  @media (prefers-reduced-motion: reduce) {
    .track {
      animation: none;
      flex-wrap: wrap;
      width: 100%;
    }
  }
</style>
