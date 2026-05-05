<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/projects'
import { useReveal } from '../composables/useReveal'

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
      <span class="mono dim">§ 02</span>
      <h2 id="work-title">Selected <em>work</em></h2>
      <span class="mono dim">2023 — 2026</span>
    </div>

    <div class="work__filter mono reveal" role="tablist" aria-label="Filter projects by domain">
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
        v-for="(p, i) in visible"
        :key="p.slug"
        class="project"
        :class="{ 'project--flip': i % 2 === 1 }"
      >
        <div class="project__num">{{ p.num }}</div>

        <div class="project__lead">
          <div class="project__meta">
            <span>{{ p.period }}</span>
            <span class="dot-sep">·</span>
            <span class="pill" :class="{ 'pill--active': p.status === 'Active' }">{{ p.status }}</span>
            <span class="dot-sep">·</span>
            <span>{{ p.domain }}</span>
          </div>
          <h3 class="project__title">
            <template v-if="p.italic">
              {{ p.title.replace(p.italic, '').trim() }} <em>{{ p.italic }}</em>
            </template>
            <template v-else>{{ p.title }}</template>
          </h3>
          <p class="project__tagline">{{ p.tagline }}</p>

          <dl class="project__stack">
            <div v-for="row in p.stack" :key="row.dt" class="project__stack-row">
              <dt>{{ row.dt }}</dt>
              <dd>{{ row.dd }}</dd>
            </div>
          </dl>

          <div v-if="p.links?.length" class="project__links">
            <a v-for="l in p.links" :key="l.href" :href="l.href" target="_blank" rel="noopener">
              {{ l.label }} <span aria-hidden="true">↗</span>
            </a>
          </div>
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
.work__filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px dashed var(--line);
}
.chip {
  display: inline-flex;
  align-items: baseline;
  gap: 0.5rem;
  padding: 0.5rem 0.9rem;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--muted);
  font-family: var(--mono);
  font-size: var(--fs-mono);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  transition: color 0.3s var(--ease-out),
              border-color 0.3s var(--ease-out),
              background 0.3s var(--ease-out);
}
.chip:hover { color: var(--text); border-color: var(--accent); }
.chip--on {
  color: var(--bg);
  background: var(--accent);
  border-color: var(--accent);
}
.chip__count {
  font-size: 9px;
  opacity: 0.7;
  letter-spacing: 0.04em;
}

.work__empty {
  padding: 2rem 0;
  font-style: italic;
}

.proj-move,
.proj-enter-active,
.proj-leave-active {
  transition: opacity 0.5s var(--ease-out), transform 0.5s var(--ease-out);
}
.proj-enter-from,
.proj-leave-to {
  opacity: 0;
  transform: translateY(16px);
}
.proj-leave-active {
  position: absolute;
  width: 100%;
}
.work__list {
  position: relative;
}
</style>
