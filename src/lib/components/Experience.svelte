<script lang="ts">
  import Reveal from './Reveal.svelte'
  import JobRow from './JobRow.svelte'
  import { jobs } from '../content'
</script>

<section class="experience" id="experience" aria-labelledby="exp-heading">
  <div class="bg-par" aria-hidden="true">
    <img class="bg" src="/img/experience-background.jpg" alt="" />
    <div class="bg-scrim"></div>
  </div>
  <div class="inner">
    <Reveal>
      <p class="eyebrow" id="exp-heading">Experience</p>
    </Reveal>
    <div class="jobs">
      {#each jobs as job, i (job.company + job.start)}
        <JobRow {job} index={i} />
      {/each}
    </div>
  </div>
</section>

<style>
  .experience {
    position: relative;
    padding: var(--section-gap) var(--gutter);
  }
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
  .jobs {
    margin-top: 2rem;
    border-bottom: 1px solid var(--line);
  }
</style>
