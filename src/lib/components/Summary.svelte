<script lang="ts">
  import Parallax from './Parallax.svelte'
  import Reveal from './Reveal.svelte'
  import { summary } from '../content'

  // cats play their animation once, settle, then get back up on a 15s timer.
  // the APNGs are num_plays=1, so remounting the <img> re-triggers playback.
  const CAT_INTERVAL = 15_000
  let cycle = $state(0)

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  $effect(() => {
    if (reduceMotion) return
    const id = setInterval(() => (cycle += 1), CAT_INTERVAL)
    return () => clearInterval(id)
  })
</script>

<section class="summary" id="about" aria-labelledby="about-heading">
  <div class="bg-par" aria-hidden="true">
    <img class="bg" src="/img/summary-background.jpg" alt="" />
    <div class="bg-scrim"></div>
  </div>
  <div class="inner">
    <Reveal>
      <p class="eyebrow" id="about-heading">About</p>
    </Reveal>

    <div class="stage">
      <Parallax speed={0.12}>
        <Reveal delay={120} y={48}>
          <p class="statement display">{summary}</p>
        </Reveal>
      </Parallax>

      <!-- the cats: all three sitting together in a row below the statement -->
      {#key cycle}
        <div class="cat-row">
          <Parallax speed={-0.06} class="cat-par cat-par-1">
            <Reveal delay={500} y={24}>
              <img class="cat cat-1" src="/cats/cat1.png?t={cycle}" alt="" aria-hidden="true" />
            </Reveal>
          </Parallax>
          <Parallax speed={0.05} class="cat-par cat-par-2">
            <Reveal delay={600} y={24}>
              <img class="cat cat-2" src="/cats/cat2.png?t={cycle}" alt="" aria-hidden="true" />
            </Reveal>
          </Parallax>
          <Parallax speed={0.02} class="cat-par cat-par-3">
            <Reveal delay={700} y={24}>
              <img class="cat cat-3" src="/cats/cat3.png?t={cycle}" alt="" aria-hidden="true" />
            </Reveal>
          </Parallax>
        </div>
      {/key}
    </div>
  </div>
</section>

<style>
  .summary {
    position: relative;
    padding: var(--section-gap) var(--gutter);
  }
  /* full-bleed photo background, mirrored from Hero but slower/deeper */
  .bg-par {
    position: absolute;
    inset: 0;
    overflow: hidden;
    z-index: 0;
  }
  .bg {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  .bg-scrim {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(to bottom, #000 0%, rgba(0, 0, 0, 0.45) 18%, rgba(0, 0, 0, 0.45) 82%, #000 100%),
      radial-gradient(ellipse at center, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.45));
  }
  .inner {
    position: relative;
    z-index: 1;
    max-width: var(--maxw);
    margin: 0 auto;
  }
  .stage {
    position: relative;
    margin-top: 2.5rem;
  }
  .statement {
    position: relative;
    z-index: 1;
    font-size: clamp(1.75rem, 1.2rem + 3.2vw, 3.5rem);
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.02em;
    max-width: 22ch;
    /* keep the last line clear for the grey cat to sit on */
    padding-bottom: 0.15em;
    text-wrap: balance;
  }
  @media (min-width: 64rem) {
    .statement {
      max-width: 26ch;
    }
  }

  .stage :global(.cat-par) {
    position: relative;
    pointer-events: none;
    z-index: 2;
  }
  /* all three cats in a row below the statement */
  .cat-row {
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    gap: clamp(0.5rem, 3vw, 3rem);
    margin-top: 1rem;
  }
  .cat {
    display: block;
    height: auto;
    /* soft glow so the silhouettes read against pure black */
    filter: drop-shadow(0 0 14px rgba(0, 0, 0, 0.9))
      drop-shadow(0 0 28px rgba(0, 229, 229, 0.12));
  }

  .cat-1 {
    width: clamp(5.5rem, 11vw, 9.5rem);
  }

  .cat-3 {
    width: clamp(4.5rem, 9vw, 8rem);
    transform: scaleX(-1); /* face the row */
  }

  .cat-2 {
    width: clamp(5rem, 9.5vw, 8.5rem);
    transform: scaleX(-1); /* face the row */
  }

  /* on small screens, shrink so they don't crowd */
  @media (max-width: 48rem) {
    .cat-1 {
      width: 5rem;
    }
    .cat-2 {
      width: 4.5rem;
    }
    .cat-3 {
      width: 4rem;
    }
  }
</style>
