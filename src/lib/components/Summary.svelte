<script lang="ts">
  import Parallax from './Parallax.svelte'
  import Reveal from './Reveal.svelte'
  import { summary } from '../content'
</script>

<section class="summary" id="about" aria-labelledby="about-heading">
  <div class="inner">
    <Reveal>
      <p class="eyebrow" id="about-heading">About</p>
    </Reveal>
    <Parallax speed={0.12}>
      <Reveal delay={120} y={48}>
        <p class="statement display">{summary}</p>
      </Reveal>
    </Parallax>
  </div>
</section>

<style>
  .summary {
    padding: var(--section-gap) var(--gutter);
  }
  .inner {
    max-width: var(--maxw);
    margin: 0 auto;
  }
  .statement {
    margin-top: 2.5rem;
    font-size: clamp(1.75rem, 1.2rem + 3.2vw, 3.5rem);
    font-weight: 600;
    line-height: 1.12;
    letter-spacing: -0.02em;
    max-width: 22ch;
  }
  @media (min-width: 64rem) {
    .statement {
      max-width: 26ch;
    }
  }
</style>
