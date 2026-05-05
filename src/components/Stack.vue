<script setup>
import { ref } from 'vue'
import { stack } from '../data/projects'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="stack-section" aria-labelledby="stack-title">
    <div class="section-head reveal">
      <span class="mono dim">[06]</span>
      <h2 id="stack-title">Atelier <span class="acc">/ practice</span></h2>
      <span class="mono dim">Tools, tendencies, taste</span>
    </div>

    <div class="stack-grid reveal--stagger">
      <div v-for="col in stack" :key="col.cat" class="stack-col">
        <h3>— {{ col.cat }}</h3>
        <ul>
          <li v-for="it in col.items" :key="it.v">
            <span style="color: var(--text);">{{ it.v }}</span>
            <span v-if="it.note">{{ it.note }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
