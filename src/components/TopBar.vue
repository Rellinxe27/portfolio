<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const scrolled = ref(false)
const activeId = ref('')

const sections = ['work', 'coursework', 'manner', 'proof', 'contact']

const onScroll = () => {
  scrolled.value = window.scrollY > 40
  let current = ''
  for (const id of sections) {
    const el = document.getElementById(id)
    if (!el) continue
    const top = el.getBoundingClientRect().top
    if (top < window.innerHeight * 0.4) current = id
  }
  activeId.value = current
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
      <span class="dim">/ Engineer · Abidjan</span>
    </div>
    <nav class="bar__nav mono">
      <a href="#work"       :class="{ 'is-active': activeId === 'work' }">Work</a>
      <a href="#coursework" :class="{ 'is-active': activeId === 'coursework' }">Coursework</a>
      <a href="#manner"     :class="{ 'is-active': activeId === 'manner' }">Manner</a>
      <a href="#proof"      :class="{ 'is-active': activeId === 'proof' }">Proof</a>
      <a href="#contact"    :class="{ 'is-active': activeId === 'contact' }">Contact</a>
    </nav>
  </header>
</template>

<style scoped>
.bar--scrolled { border-bottom: 1px solid var(--line); }
</style>
