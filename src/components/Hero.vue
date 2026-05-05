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
      <span>Available · Founding eng + co-founder + select consulting</span>
    </div>

    <h1 id="hero-title" class="hero__title reveal">
      Full-stack &amp; mobile engineer<br />
      shipping production <span class="acc">SaaS</span><br />
      for <span class="lined">West African</span> markets.
      <small>
        I build the whole thing — Spring Boot APIs, Vue/Nuxt web,
        SwiftUI/Compose mobile, and the AWS/Hetzner infra under it.
        Currently: <strong>Campus LMS</strong> (3 universities),
        <strong>HopRide</strong> (1 city), <strong>FNE Connect</strong> (live with the tax authority).
      </small>
    </h1>

    <p class="hero__lede reveal">
      Based in Abidjan. CFA francs in the schema, French as the default copy,
      mobile-money rails as the payment baseline. Five repos, two native apps,
      one tax authority, and a backlog that gets shorter on weekdays.
    </p>

    <div class="hero__meta reveal--stagger">
      <div class="hero__meta-item">
        <span class="lab mono">[01] Based</span>
        <span class="val">Abidjan, Côte d'Ivoire</span>
      </div>
      <div class="hero__meta-item">
        <span class="lab mono">[02] Identity</span>
        <span class="val">Full-stack · Founder</span>
      </div>
      <div class="hero__meta-item">
        <span class="lab mono">[03] Stack</span>
        <span class="val">Spring · Vue · RN · Go</span>
      </div>
      <div class="hero__meta-item">
        <span class="lab mono">[04] Languages</span>
        <span class="val">FR · EN · Dyula</span>
      </div>
    </div>

    <a href="#work" class="hero__scroll mono reveal">
      <span>Selected work — 2023 / 2026</span>
      <svg width="36" height="10" viewBox="0 0 36 10" fill="none" aria-hidden="true">
        <path d="M0 5 H32 M27 1 L32 5 L27 9" stroke="currentColor" stroke-width="1" fill="none"/>
      </svg>
    </a>
  </section>
</template>
