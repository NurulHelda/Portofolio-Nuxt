<template>
  <section class="contact-section">
    <div class="contact-section-width">
      <div>
        <div class="img-container">
          <!-- <div
            class="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-indigo-50"
          >
            <UserIcon class="w-9 h-9 lg:w-10 lg:h-10" />
          </div> -->
          <div>
            <img
              src="/undraw_personal_email.svg"
              alt="personal email svg"
              width="890"
              height="730"
            />
          </div>
        </div>
        <div class="details-cta-container">
          <div>
            <h2>Get in touch with me</h2>
            <!-- <p
              class="text-base text-justify text-gray-600 md:text-lg 2xl:text-xl"
              style="word-spacing: 5px"
            >
              I'm seeking opportunities to work with companies that can improve
              my skills not just in tech but also to be able to learn to lead
              and teach others. If I am the person you are looking for, feel
              free to reach me through email or my contact information in my
              resume.
            </p> -->
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
import { MailIcon, ClipboardListIcon } from "@heroicons/vue/outline";
</script>
