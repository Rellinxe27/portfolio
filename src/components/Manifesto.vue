<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<template>
  <section ref="root" class="manifesto" aria-labelledby="manifesto-title">
    <aside class="manifesto__label mono">
      <div>§ 01</div>
      <div>— Une note</div>
      <div class="dim">— A note</div>
    </aside>

    <div class="manifesto__body">
      <h2 id="manifesto-title" class="sr-only">A note</h2>
      <p class="reveal">
        <span class="dropcap">I</span> build software for the markets I actually
        live in. That means thinking in CFA francs, mobile-money rails, and
        Francophone interfaces from the start — not retrofitting a Western
        template after the fact, hoping the seams don't show.
      </p>
      <p class="reveal">
        The work spans fintech, edtech, ride-hailing, marketplaces — anywhere
        there's a real gap between what local users need and what's actually
        shipping. I tend to ship the whole thing: backend, frontend, native
        mobile, infrastructure. <em>Generalist by necessity, specialist by
        interest.</em>
      </p>
      <p class="reveal">
        I'm not the engineer for a polished demo. I'm the one you call when
        the demo is fine but the third invoice fails reconciliation in
        production at 2am.
      </p>
    </div>
  </section>
</template>
