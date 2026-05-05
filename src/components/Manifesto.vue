<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="note" aria-labelledby="note-title">
    <aside class="note__label mono">
      <div>[01]</div>
      <div>— Note</div>
    </aside>

    <div class="note__body">
      <h2 id="note-title" class="sr-only">Note</h2>
      <p class="reveal">
        I build software for the markets I actually live in — <span class="acc">CFA francs</span> in the schema,
        French as the default copy, mobile money as the payment baseline. Not retrofitted
        from a Western template. Built that way from line one.
      </p>
      <p class="reveal">
        The work spans fintech, edtech, mobility, marketplaces — wherever
        there's a real gap between what local users need and what's actually
        shipping. I tend to ship the whole thing: backend, frontend, native mobile, infrastructure.
      </p>
      <p class="reveal">
        I'm not the engineer for a polished demo. I'm the one you call when
        the demo is fine but the third invoice fails reconciliation in production at 2 AM.
      </p>
    </div>
  </section>
</template>
