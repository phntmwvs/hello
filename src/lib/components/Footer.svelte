<script lang="ts">
  import Parallax from './Parallax.svelte'
  import Reveal from './Reveal.svelte'
  import { linkedin, email } from '../content'

  const year = new Date().getFullYear()
</script>

<footer class="footer" id="contact" aria-labelledby="contact-heading">
  <div class="bg-par" aria-hidden="true">
    <img class="bg" src="/img/contact-background.jpg" alt="" />
    <div class="bg-scrim"></div>
  </div>
  <div class="inner">
    <Reveal>
      <p class="eyebrow" id="contact-heading">Contact</p>
    </Reveal>

    <Parallax speed={0.14}>
      <Reveal delay={120} y={56}>
        <a
          class="cta display"
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Connect with Daniel on LinkedIn"
        >
          Get in touch
          <span class="arrow" aria-hidden="true">→</span>
        </a>
      </Reveal>
    </Parallax>

    <Reveal delay={240}>
      <ul class="links">
        <li>
          <span class="eyebrow label">LinkedIn</span>
          <a href={linkedin} target="_blank" rel="noopener noreferrer">in/dandotjs</a>
        </li>
        {#if email}
          <li>
            <span class="eyebrow label">Email</span>
            <a href="mailto:{email}">{email}</a>
          </li>
        {/if}
      </ul>
    </Reveal>

    <div class="baseline">
      <p class="muted">© {year} daniel g</p>
      <a href="#top" class="eyebrow top">Back to top ↑</a>
    </div>
  </div>
</footer>

<style>
  .footer {
    position: relative;
    padding: var(--section-gap) var(--gutter) 3rem;
    border-top: 1px solid var(--line);
    overflow: hidden;
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

  .cta {
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    margin-top: 2.5rem;
    font-size: clamp(3rem, 10vw, 8rem);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: -0.02em;
    line-height: 1;
    background: linear-gradient(90deg, var(--ink), var(--accent));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    transition: letter-spacing 0.4s cubic-bezier(0.22, 1, 0.36, 1);
  }
  .cta:hover {
    letter-spacing: 0.01em;
  }
  .cta .arrow {
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    -webkit-text-fill-color: var(--accent);
  }
  .cta:hover .arrow {
    transform: translateX(0.5rem);
  }

  .links {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 4rem;
    margin-top: 4rem;
  }
  .links li {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .links .label {
    color: var(--faint);
  }
  .links a {
    font-size: 1.15rem;
    color: var(--ink);
    border-bottom: 1px solid var(--line);
    padding-bottom: 2px;
    transition: border-color 0.3s;
  }
  .links a:hover {
    border-color: var(--accent);
  }

  .baseline {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    margin-top: 6rem;
    padding-top: 2rem;
    border-top: 1px solid var(--line);
  }
  .top {
    color: var(--muted);
  }
  .top:hover {
    color: var(--ink);
  }
</style>
