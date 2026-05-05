<script setup>
import { ref } from 'vue'
import { career } from '../data/projects'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="career" aria-labelledby="career-title">
    <div class="section-head reveal">
      <span class="mono dim">[07]</span>
      <h2 id="career-title">Parcours <span class="acc">/ career</span></h2>
      <span class="mono dim">Abridged</span>
    </div>

    <ol class="career__list reveal--stagger">
      <li v-for="c in career" :key="c.years" class="career__item">
        <span class="career__years">{{ c.years }}</span>
        <span class="career__role">{{ c.role }}</span>
        <span class="career__org">{{ c.org }}</span>
      </li>
    </ol>

    <p class="mono dim" style="margin-top: 1.4rem; font-size: 11px; letter-spacing: 0.06em;">
      <span>BYU-Idaho · Applied Technology · GPA 3.4</span>
      <span class="slash">/</span>
      <span>BYU-Pathway · Certificate, Database (2024)</span>
    </p>
  </section>
</template>
