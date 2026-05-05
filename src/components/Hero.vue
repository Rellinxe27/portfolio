<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="hero" aria-labelledby="hero-title">
    <div class="hero__eyebrow mono reveal">
      <span class="dot"></span>
      <span>Available for select work · 2026 —</span>
    </div>

    <h1 id="hero-title" class="hero__title reveal">
      Production systems<br />
      for markets the world<br />
      <em>quietly overlooks.</em>
      <small>
        Full-stack — Spring Boot, Vue, React Native, Go.
        Currently shipping <strong>Campus LMS</strong> across three universities
        and <strong>HopRide</strong> across one city.
      </small>
    </h1>

    <p class="hero__lede reveal">
      I'm Rellinxe — a full-stack engineer in Abidjan. I build SaaS that takes
      <span class="accent-mark">CFA francs</span>, speaks French first, and
      assumes the network is bad on purpose. Five repos, two native apps,
      one tax authority, and a backlog that gets shorter on weekdays.
    </p>

    <div class="hero__meta reveal--stagger">
      <div class="hero__meta-item">
        <span class="lab mono">Based</span>
        <span class="val">Abidjan, Côte d'Ivoire</span>
      </div>
      <div class="hero__meta-item">
        <span class="lab mono">Discipline</span>
        <span class="val">Full-stack · Founder</span>
      </div>
      <div class="hero__meta-item">
        <span class="lab mono">Stack</span>
        <span class="val">Spring · Vue · RN · Go</span>
      </div>
      <div class="hero__meta-item">
        <span class="lab mono">Languages</span>
        <span class="val">FR · EN · Dyula</span>
      </div>
    </div>

    <a href="#work" class="hero__scroll mono reveal">
      <span>Selected work</span>
      <svg width="36" height="10" viewBox="0 0 36 10" fill="none" aria-hidden="true">
        <path d="M0 5 H32 M27 1 L32 5 L27 9" stroke="currentColor" stroke-width="1" fill="none"/>
      </svg>
    </a>
  </section>
</template>
