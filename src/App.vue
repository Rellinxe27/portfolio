<script setup>
import TopBar from './components/TopBar.vue'
import Foot from './components/Foot.vue'
</script>

<template>
  <TopBar />
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" :key="$route.path" />
      </transition>
    </RouterView>
  </main>
  <Foot />
</template>
