<script setup>
import { ref } from 'vue'
import { principles } from '../data/projects'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<template>
  <section ref="root" id="manner" class="manner" aria-labelledby="manner-title">
    <div class="section-head reveal">
      <span class="mono dim">[04]</span>
      <h2 id="manner-title">How I <span class="acc">/ think</span></h2>
      <span class="mono dim">Six rules I keep coming back to</span>
    </div>

    <div class="manner__grid reveal--stagger">
      <article
        v-for="p in principles"
        :key="p.num"
        class="principle"
        :class="`principle--${p.layout}`"
      >
        <span class="principle__num">— {{ p.num }}</span>
        <h3 class="principle__title">{{ p.title }}</h3>
        <p class="principle__body" v-html="p.body"></p>
      </article>
    </div>
  </section>
</template>
