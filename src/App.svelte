<script lang="ts">
  import Hero from './lib/components/Hero.svelte'
  import Summary from './lib/components/Summary.svelte'
  import Experience from './lib/components/Experience.svelte'
  import Tech from './lib/components/Tech.svelte'
  import Footer from './lib/components/Footer.svelte'
  import { name } from './lib/content'

  let scrolled = $state(false)
  const onScroll = () => (scrolled = window.scrollY > 40)
</script>

<svelte:window onscroll={onScroll} />

<nav class="nav" class:scrolled aria-label="Primary">
  <a href="#top" class="brand display">{name}</a>
  <ul class="nav-links">
    <li><a href="#about">About</a></li>
    <li><a href="#experience">Experience</a></li>
    <li><a href="#tech">Tech</a></li>
    <li><a href="#contact" class="nav-cta">Contact</a></li>
  </ul>
</nav>

<main>
  <Hero />
  <Summary />
  <Experience />
  <Tech />
</main>
<Footer />

<style>
  .nav {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 50;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.25rem var(--gutter);
    transition:
      background 0.4s,
      backdrop-filter 0.4s,
      border-color 0.4s;
    border-bottom: 1px solid transparent;
  }
  .nav.scrolled {
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    border-bottom-color: var(--line);
  }
  .brand {
    font-size: 1.4rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.02em;
  }
  .nav-links {
    list-style: none;
    display: flex;
    align-items: center;
    gap: clamp(1rem, 3vw, 2.25rem);
  }
  .nav-links a {
    font-size: 0.95rem;
    color: var(--muted);
    transition: color 0.3s;
  }
  .nav-links a:hover {
    color: var(--ink);
  }
  .nav-cta {
    color: var(--ink) !important;
    border: 1px solid var(--line);
    border-radius: 999px;
    padding: 0.45rem 1.1rem;
    transition:
      border-color 0.3s,
      background 0.3s;
  }
  .nav-cta:hover {
    border-color: var(--accent);
    background: rgba(0, 229, 229, 0.08);
  }

  @media (max-width: 40rem) {
    .nav-links li:not(:last-child) {
      display: none;
    }
  }
</style>
