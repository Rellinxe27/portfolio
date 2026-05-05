<script setup>
import { ref } from 'vue'
import { useReveal } from '../composables/useReveal'

const root = ref(null)
useReveal(root)
</script>

<template>
  <section ref="root" id="contact" class="contact" aria-labelledby="contact-title">
    <h2 id="contact-title" class="contact__lede reveal">
      Open to <span class="acc">select</span> work — founding engineering, technical co-founder, and West-Africa-facing SaaS consulting.
    </h2>

    <div class="contact__links reveal--stagger">
      <a class="contact__link" href="mailto:rellinxe@gmail.com">
        <span class="lab">[E]</span>
        <span class="val">rellinxe@gmail.com</span>
        <span class="arrow">↗</span>
      </a>
      <a class="contact__link" href="https://www.linkedin.com/in/rellinxe-boni-349a69190/" target="_blank" rel="noopener">
        <span class="lab">[LI]</span>
        <span class="val">rellinxe-boni</span>
        <span class="arrow">↗</span>
      </a>
      <a class="contact__link" href="https://github.com/Rellinxe27" target="_blank" rel="noopener">
        <span class="lab">[GH]</span>
        <span class="val">@Rellinxe27</span>
        <span class="arrow">↗</span>
      </a>
      <a class="contact__link" href="tel:+22567765107">
        <span class="lab">[T]</span>
        <span class="val">+225 0776 5107</span>
        <span class="arrow">↗</span>
      </a>
    </div>

    <p class="mono dim" style="margin-top: 3rem; font-size: 11px; letter-spacing: 0.06em;">
      Best response: weekdays before noon GMT. — I read every email.
    </p>
  </section>
</template>
