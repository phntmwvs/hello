<script lang="ts">
  import Reveal from './Reveal.svelte'
  import JobRow from './JobRow.svelte'
  import { jobs } from '../content'
</script>

<section class="experience" id="experience" aria-labelledby="exp-heading">
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
    padding: var(--section-gap) var(--gutter);
  }
  .inner {
    max-width: var(--maxw);
    margin: 0 auto;
  }
  .jobs {
    margin-top: 2rem;
    border-bottom: 1px solid var(--line);
  }
</style>
