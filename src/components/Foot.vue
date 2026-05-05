<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="foot">
    <div>
      <span>© Rellinxe Boni · {{ year }}</span>
      <span class="dot-sep">·</span>
      <span>Abidjan, CI</span>
    </div>
    <div>
      <span>Built with Vue 3 + Vite · No tracker · No popup · </span>
      <a href="https://github.com/Rellinxe27/portfolio" target="_blank" rel="noopener">Source ↗</a>
      <span class="dot-sep">·</span>
      <a href="legacy/index.html">v1, hand-coded ↗</a>
    </div>
  </footer>
</template>
