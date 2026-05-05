<script setup>
import { ref } from 'vue'
import { metrics } from '../data/projects'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<template>
  <section ref="root" id="proof" class="proof" aria-labelledby="proof-title">
    <div class="section-head reveal">
      <span class="mono dim">[05]</span>
      <h2 id="proof-title">Numbers, <span class="acc">/ roughly</span></h2>
      <span class="mono dim">Metrics &gt; adjectives</span>
    </div>

    <div class="proof__grid reveal--stagger">
      <article
        v-for="m in metrics"
        :key="m.lab"
        class="metric"
        :class="`metric--${m.layout}`"
      >
        <span v-if="m.num !== null" class="metric__num">
          {{ m.num }}<small>{{ m.suffix }}</small>
        </span>
        <span class="metric__lab">— {{ m.lab }}</span>
        <p class="metric__note">{{ m.note }}</p>
      </article>
    </div>
  </section>
</template>
