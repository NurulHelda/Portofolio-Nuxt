<template>
  <section class="contact-section">
    <div class="contact-section-width">
      <div>
        <div class="img-container">
          <div>
            <img src="/undraw_personal_email.svg" alt="personal email svg" width="890" height="730" />
          </div>
        </div>
        <div class="details-cta-container">
          <div>
            <h2>Get in touch with me</h2>
            <p>I’ll try my best to get back to you!</p>
          </div>
          <div>
            <a href="mailto:nurul.helda.tif20@gmail.com">
              <MailIcon /> Say Hello!
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
  import {
    MailIcon,
    ClipboardListIcon
  } from "@heroicons/vue/outline";
</script>