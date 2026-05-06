<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const onScroll = () => { scrolled.value = window.scrollY > 40 }

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="bar" :class="{ 'bar--scrolled': scrolled }">
    <RouterLink to="/" class="bar__brand mono">
      <span class="dot"></span>
      <strong>Rellinxe Boni</strong>
      <span class="dim">/ Engineer · Abidjan</span>
    </RouterLink>
    <nav class="bar__nav mono">
      <RouterLink to="/work"       active-class="" exact-active-class="is-active">Work</RouterLink>
      <RouterLink to="/coursework" active-class="" exact-active-class="is-active">Coursework</RouterLink>
      <RouterLink to="/about"      active-class="" exact-active-class="is-active">About</RouterLink>
      <RouterLink to="/contact"    active-class="" exact-active-class="is-active">Contact</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.bar--scrolled { border-bottom: 1px solid var(--line); }
</style>
