<template>
  <div class="footer-section">
    <footer>
      <div class="social-icons-and-navigation">
        <!-- nav - start -->
        <nav>
          <a href="/#about" class="footerBtn">About</a>
          <a href="/#projects" class="footerBtn">Projects</a>
          <a href="/#article" class="footerBtn">Article</a>
          <a href="/#contact" class="footerBtn">Contact</a>
        </nav>
        <!-- nav - end -->

        <!-- social - start -->
        <div>
          <a
            href="https://github.com/NurulHelda"
            aria-label="Github"
            target="_blank"
            class="footerIcon"
          >
            <IconsGithubIcon />
          </a>
        </div>
        <!-- social - end -->
      </div>

      <div class="copyright">
        © {{ CURRENT_YEAR }} - Present NH. All rights reserved.
      </div>
    </footer>
  </div>
</template>
<script setup>
const CURRENT_YEAR = new Date().getFullYear();
</script>
