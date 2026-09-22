<script lang="ts">
  import Reveal from './Reveal.svelte'
  import type { Job } from '../content'

  interface Props {
    job: Job
    index: number
  }
  let { job, index }: Props = $props()

  const num = $derived(String(index + 1).padStart(2, '0'))
</script>

<Reveal y={40}>
  <article class="job">
    <div class="num display" aria-hidden="true">{num}</div>
    <div class="body">
      <div class="head">
        <h3 class="title display">{job.title}</h3>
        <p class="company">{job.company}</p>
      </div>
      <p class="meta">
        <span class="eyebrow">{job.start} — {job.end}</span>
        <span class="dot" aria-hidden="true">·</span>
        <span class="muted">{job.location}</span>
      </p>
      <p class="blurb">{job.blurb}</p>
      <ul class="tags" aria-label="Technologies">
        {#each job.tech as t (t)}
          <li class="tag">{t}</li>
        {/each}
      </ul>
    </div>
  </article>
</Reveal>

<style>
  .job {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: clamp(1.25rem, 4vw, 3.5rem);
    padding: clamp(1.75rem, 4vw, 3rem) 0;
    border-top: 1px solid var(--line);
    align-items: start;
  }
  .num {
    font-size: clamp(2rem, 6vw, 4.5rem);
    color: var(--faint);
    line-height: 1;
    min-width: 2ch;
  }
  .head {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.5rem 1rem;
  }
  .title {
    font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem);
    font-weight: 650;
  }
  .company {
    font-size: clamp(1rem, 0.9rem + 0.8vw, 1.35rem);
    color: var(--accent);
    font-weight: 500;
  }
  .meta {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-top: 0.5rem;
  }
  .dot {
    color: var(--faint);
  }
  .blurb {
    margin-top: 1.1rem;
    color: var(--muted);
    max-width: 56ch;
  }
  .tags {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1.25rem;
  }
  .tag {
    font-family: var(--font-mono);
    font-size: 0.72rem;
    letter-spacing: 0.04em;
    padding: 0.35rem 0.7rem;
    border: 1px solid var(--line);
    border-radius: 999px;
    color: var(--muted);
    background: var(--surface-2);
  }
</style>
