<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
import { useReveal } from '../composables/useReveal'
import ProjectDiagram from './ProjectDiagram.vue'

const root = ref(null)
useReveal(root)

const filters = [
  { key: 'all',         label: 'All' },
  { key: 'fintech',     label: 'Fintech' },
  { key: 'mobility',    label: 'Mobility' },
  { key: 'edtech',      label: 'EdTech' },
  { key: 'marketplace', label: 'Marketplace' }
]

const active = ref('all')

const visible = computed(() =>
  active.value === 'all'
    ? projects
    : projects.filter((p) => p.category === active.value)
)

const counts = computed(() => {
  const c = { all: projects.length }
  for (const p of projects) c[p.category] = (c[p.category] || 0) + 1
  return c
})
</script>

<template>
  <section ref="root" id="work" class="work" aria-labelledby="work-title">
    <div class="section-head reveal">
      <span class="mono dim">[02]</span>
      <h2 id="work-title">Selected <span class="acc">/ work</span></h2>
      <span class="mono dim">2023 — 2026</span>
    </div>

    <div class="work__filter mono reveal" role="tablist" aria-label="Filter by domain">
      <button
        v-for="f in filters"
        :key="f.key"
        role="tab"
        :aria-selected="active === f.key"
        :class="['chip', { 'chip--on': active === f.key }]"
        @click="active = f.key"
      >
        {{ f.label }}
        <span class="chip__count">{{ counts[f.key] || 0 }}</span>
      </button>
    </div>

    <transition-group name="proj" tag="div" class="work__list">
      <article
        v-for="p in visible"
        :key="p.slug"
        class="project"
      >
        <div class="project__num">{{ p.num }}</div>

        <div class="project__lead">
          <div class="project__meta">
            <span>{{ p.period }}</span>
            <span class="slash">/</span>
            <span class="pill" :class="{ 'pill--active': p.status === 'Active' }">{{ p.status }}</span>
            <span class="slash">/</span>
            <span>{{ p.domain }}</span>
          </div>

          <h3 class="project__title">
            <template v-if="p.italic">
              {{ p.title.replace(p.italic, '').trim() }} <span class="acc">{{ p.italic }}</span>
            </template>
            <template v-else>{{ p.title }}</template>
          </h3>
          <p class="project__tagline">{{ p.tagline }}</p>

          <p v-if="p.impact" class="project__impact mono">
            <span class="lab">Impact —</span>
            <span class="val">{{ p.impact }}</span>
          </p>

          <ProjectDiagram v-if="p.diagram" :kind="p.diagram" />

          <dl class="project__stack">
            <div v-for="row in p.stack" :key="row.dt" class="project__stack-row">
              <dt>{{ row.dt }}</dt>
              <dd>{{ row.dd }}</dd>
            </div>
          </dl>
        </div>

        <div class="project__story">
          <div v-for="b in p.beats" :key="b.label" class="project__beat">
            <span class="label">— {{ b.label }}</span>
            <div>
              <p>{{ b.text }}</p>
              <span v-if="b.nb" class="nb">— {{ b.nb }}</span>
            </div>
          </div>
        </div>
      </article>
    </transition-group>

    <p v-if="!visible.length" class="mono dim work__empty">
      Nothing here under <em>{{ active }}</em> yet.
    </p>
  </section>
</template>

<style scoped>
.project__impact {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  padding: 0.5rem 0.8rem;
  background: var(--accent-soft);
  border-left: 2px solid var(--accent);
  font-family: var(--mono);
  font-size: var(--fs-mono);
  letter-spacing: 0.06em;
  color: var(--text);
  text-transform: uppercase;
  align-self: flex-start;
  max-width: 100%;
  text-overflow: ellipsis;
}
.project__impact .lab {
  color: var(--accent);
  font-weight: 600;
}
.project__impact .val {
  color: var(--text);
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 500;
}
</style>
