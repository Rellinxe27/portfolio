<script setup>
defineProps({ kind: { type: String, required: true } })
</script>

<template>
  <div class="diagram">
    <!-- HopRide -->
    <svg v-if="kind === 'hopride'" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g stroke="var(--line)" stroke-width="0.6" fill="none">
        <path d="M40 110 L120 110" stroke-dasharray="3 3"/>
        <path d="M180 60 L260 60" stroke-dasharray="3 3"/>
        <path d="M180 110 L260 110" stroke-dasharray="3 3"/>
        <path d="M180 160 L260 160" stroke-dasharray="3 3"/>
        <path d="M320 60 L380 60" stroke-dasharray="3 3"/>
        <path d="M320 110 L380 110" stroke-dasharray="3 3"/>
        <path d="M320 160 L380 160" stroke-dasharray="3 3"/>
      </g>

      <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--muted)" letter-spacing="1">
        <text x="40" y="30">RIDER · DRIVER</text>
        <text x="180" y="30">GO BACKEND · GRPC</text>
        <text x="320" y="30">DATA / INFRA</text>
      </g>

      <!-- Clients -->
      <g>
        <rect x="40" y="80" width="80" height="26" fill="var(--surface)" stroke="var(--accent)" stroke-width="0.8"/>
        <text x="80" y="97" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="var(--text)">SwiftUI</text>
        <rect x="40" y="116" width="80" height="26" fill="var(--surface)" stroke="var(--accent)" stroke-width="0.8"/>
        <text x="80" y="133" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="var(--text)">Compose</text>
      </g>

      <!-- Backend services -->
      <g font-family="Inter, sans-serif" font-size="9" fill="var(--text)">
        <rect x="180" y="48" width="80" height="22" fill="var(--bg-1)" stroke="var(--line)"/>
        <text x="220" y="62" text-anchor="middle">dispatch</text>
        <rect x="180" y="100" width="80" height="22" fill="var(--bg-1)" stroke="var(--line)"/>
        <text x="220" y="114" text-anchor="middle">trips</text>
        <rect x="180" y="152" width="80" height="22" fill="var(--bg-1)" stroke="var(--line)"/>
        <text x="220" y="166" text-anchor="middle">payments</text>
      </g>

      <!-- Data -->
      <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--muted)">
        <rect x="320" y="48" width="60" height="22" fill="transparent" stroke="var(--accent)" stroke-dasharray="2 2"/>
        <text x="350" y="62" text-anchor="middle" fill="var(--accent)">Postgres</text>
        <rect x="320" y="100" width="60" height="22" fill="transparent" stroke="var(--accent)" stroke-dasharray="2 2"/>
        <text x="350" y="114" text-anchor="middle" fill="var(--accent)">PostGIS</text>
        <rect x="320" y="152" width="60" height="22" fill="transparent" stroke="var(--accent)" stroke-dasharray="2 2"/>
        <text x="350" y="166" text-anchor="middle" fill="var(--accent)">Hetzner</text>
      </g>

      <text x="40" y="200" font-family="JetBrains Mono, monospace" font-size="8" fill="var(--dim)">
        AUTH · DISPATCH · LOCATION · TRIPS · PAYMENTS — gRPC INTERNAL · GATEWAY EXTERNAL
      </text>
    </svg>

    <!-- Campus LMS -->
    <svg v-else-if="kind === 'campus'" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g font-family="JetBrains Mono, monospace" font-size="9" fill="var(--muted)" letter-spacing="1">
        <text x="40" y="30">CLIENTS</text>
        <text x="170" y="30">SPRING BOOT · 30 SVCS</text>
        <text x="320" y="30">PER-TENANT</text>
      </g>

      <g>
        <rect x="40" y="50" width="90" height="22" fill="var(--surface)" stroke="var(--accent)" stroke-width="0.8"/>
        <text x="85" y="64" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="var(--text)">Vue 3 web</text>
        <rect x="40" y="80" width="90" height="22" fill="var(--surface)" stroke="var(--accent)" stroke-width="0.8"/>
        <text x="85" y="94" text-anchor="middle" font-family="Inter,sans-serif" font-size="10" fill="var(--text)">RN mobile</text>
        <rect x="40" y="110" width="90" height="22" fill="transparent" stroke="var(--line)" stroke-dasharray="3 3"/>
        <text x="85" y="124" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="9" fill="var(--muted)">OpenAPI</text>
      </g>

      <g font-family="Inter, sans-serif" font-size="8" fill="var(--text)">
        <rect x="170" y="50"  width="56" height="20" fill="var(--bg-1)" stroke="var(--line)"/><text x="198" y="63" text-anchor="middle">auth</text>
        <rect x="232" y="50"  width="56" height="20" fill="var(--bg-1)" stroke="var(--line)"/><text x="260" y="63" text-anchor="middle">courses</text>
        <rect x="170" y="76"  width="56" height="20" fill="var(--bg-1)" stroke="var(--line)"/><text x="198" y="89" text-anchor="middle">grades</text>
        <rect x="232" y="76"  width="56" height="20" fill="var(--bg-1)" stroke="var(--line)"/><text x="260" y="89" text-anchor="middle">attend.</text>
        <rect x="170" y="102" width="56" height="20" fill="var(--bg-1)" stroke="var(--line)"/><text x="198" y="115" text-anchor="middle">files</text>
        <rect x="232" y="102" width="56" height="20" fill="var(--bg-1)" stroke="var(--line)"/><text x="260" y="115" text-anchor="middle">notif.</text>
        <rect x="170" y="128" width="56" height="20" fill="var(--bg-1)" stroke="var(--line)"/><text x="198" y="141" text-anchor="middle">+ 24 more</text>
        <rect x="232" y="128" width="56" height="20" fill="transparent" stroke="var(--line)" stroke-dasharray="2 2"/><text x="260" y="141" text-anchor="middle" fill="var(--muted)">Bull queue</text>
      </g>

      <g font-family="JetBrains Mono, monospace" font-size="9">
        <rect x="320" y="50" width="60" height="22" fill="transparent" stroke="var(--accent)" stroke-dasharray="2 2"/>
        <text x="350" y="64" text-anchor="middle" fill="var(--accent)">univ_a</text>
        <rect x="320" y="76" width="60" height="22" fill="transparent" stroke="var(--accent)" stroke-dasharray="2 2"/>
        <text x="350" y="90" text-anchor="middle" fill="var(--accent)">univ_b</text>
        <rect x="320" y="102" width="60" height="22" fill="transparent" stroke="var(--accent)" stroke-dasharray="2 2"/>
        <text x="350" y="116" text-anchor="middle" fill="var(--accent)">univ_c</text>
        <rect x="320" y="128" width="60" height="22" fill="transparent" stroke="var(--line)" stroke-dasharray="2 2"/>
        <text x="350" y="142" text-anchor="middle" fill="var(--muted)">+ schemas</text>
      </g>

      <text x="40" y="200" font-family="JetBrains Mono, monospace" font-size="8" fill="var(--dim)">
        CLEAN ARCHITECTURE · SCHEMA-PER-TENANT · OFFLINE-TOLERANT CLIENTS
      </text>
    </svg>
  </div>
</template>

<style scoped>
.diagram {
  border: 1px solid var(--line);
  background: var(--bg-1);
  padding: 0.8rem 1rem;
  margin-top: 1rem;
}
.diagram svg { width: 100%; height: auto; }
</style>
