<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="bar" :class="{ 'bar--scrolled': scrolled }">
    <div class="bar__brand mono">
      <span class="dot"></span>
      <strong>Rellinxe Boni</strong>
      <span class="dim">— Builder, Abidjan</span>
    </div>
    <nav class="bar__nav mono">
      <a href="#work">Work</a>
      <a href="#manner">Manner</a>
      <a href="#proof">Proof</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
</template>

<style scoped>
.bar--scrolled { border-bottom: 1px solid var(--line); }
.bar__brand .dim { font-weight: 400; }
</style>
