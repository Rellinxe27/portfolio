<script setup>
import { ref, computed } from 'vue'
import { classProjects } from '../data/projects'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)

const tracks = [
  { key: 'all',      label: 'All' },
  { key: 'frontend', label: 'Frontend' },
  { key: 'backend',  label: 'Backend' },
  { key: 'systems',  label: 'Systems' },
  { key: 'security', label: 'Security' }
]

const active = ref('all')
const open = ref(null)

const counts = computed(() => {
  const c = { all: classProjects.length }
  for (const p of classProjects) c[p.track] = (c[p.track] || 0) + 1
  return c
})

const visible = computed(() =>
  active.value === 'all'
    ? classProjects
    : classProjects.filter((p) => p.track === active.value)
)

const toggle = (i) => { open.value = open.value === i ? null : i }
</script>

<template>
  <section ref="root" id="coursework" class="coursework" aria-labelledby="cw-title">
    <div class="section-head reveal">
      <span class="mono dim">[03]</span>
      <h2 id="cw-title">Coursework <span class="acc">/ archive</span></h2>
      <span class="mono dim">BYU-Idaho · 2021 — 2025</span>
    </div>

    <div class="coursework__intro reveal">
      <p>
        These are the school projects — kept here on purpose.
        They're where the muscle memory came from: <strong>C++ console programs</strong>,
        <strong>PHP/MVC dealerships</strong>, <strong>SASS-driven scooter brands</strong>,
        and a <strong>GraphQL services API</strong> that turned into the design notes for TâcheSûre later.
      </p>
      <p>
        Not the work I'd hand a recruiter as proof of seniority, but
        the work I'd point to if you asked me <em>where the patterns came from</em>.
      </p>
    </div>

    <div class="coursework__filter mono reveal">
      <button
        v-for="t in tracks"
        :key="t.key"
        :class="['chip', { 'chip--on': active === t.key }]"
        @click="active = t.key"
      >
        {{ t.label }}
        <span class="chip__count">{{ counts[t.key] || 0 }}</span>
      </button>
    </div>

    <div class="cw-table reveal">
      <template v-for="(p, i) in visible" :key="`${p.code}-${p.title}`">
        <button
          class="cw-row"
          :class="{ 'is-open': open === i }"
          @click="toggle(i)"
          :aria-expanded="open === i"
        >
          <span class="cw-row__year">{{ p.year }}</span>
          <span class="cw-row__title">{{ p.title }}</span>
          <span class="cw-row__course">{{ p.course }}</span>
          <span class="cw-row__stack">{{ p.stack.join(' · ') }}</span>
          <span class="cw-row__caret">+</span>
        </button>
        <div v-if="open === i" class="cw-detail">
          <span></span>
          <div class="cw-detail__body">
            <p>{{ p.summary }}</p>
            <div v-if="p.links?.length" class="cw-detail__links">
              <a v-for="l in p.links" :key="l.href" :href="l.href" target="_blank" rel="noopener">
                {{ l.label }} ↗
              </a>
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>
