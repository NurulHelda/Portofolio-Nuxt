<template>
  <NavBar />
  <section class="bg-white py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button class="bg-white rounded-md text-gray-800 font-bold py-2 px-4 flex items-center" @click="back">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd"
            d="M10.707,16.707 C10.316,17.098 9.684,17.098 9.293,16.707 L4.293,11.707 C3.902,11.316 3.902,10.684 4.293,10.293 L9.293,5.293 C9.684,4.902 10.316,4.902 10.707,5.293 C11.098,5.684 11.098,6.316 10.707,6.707 L7.414,10 L16,10 C16.552,10 17,10.448 17,11 C17,11.552 16.552,12 16,12 L7.414,12 L10.707,15.293 C11.098,15.684 11.098,16.316 10.707,16.707 Z"
            clip-rule="evenodd" />
        </svg>Back
      </button>
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-6 animate-typewriter-slow" style="animation-name: title-anim;
           animation-duration: 1s;
           animation-fill-mode: forwards;
           opacity: 0;">
          Articles
        </h2>
        <p class="mt-4 text-lg text-gray-500 justify-center" style="animation-name: slide-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    opacity: 0;">
          A place where share thoughts and experiences on various topics.
        </p>
      </div>
    </div>
  </section>
  <div class="sm:px-20 px-10 container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink :to="`/articles/${post.id}`" v-for="post in posts.posts" :key="post.id"
        class="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          class="h-48 w-full object-cover object-center transition duration-500 ease-in-out transform hover:scale-110"
          :src="`https://source.unsplash.com/random/400x300/?${post.tags[1]}`" alt="Random image">
        <div class="p-4">
          <h2 class="font-bold text-lg mb-2" style="font-family: 'Playfair Display', serif; font-style: italic; color: #444444; text-shadow: 2px 2px #FFFFFF;
            animation-name: title-anim;
            animation-duration: 1s;
            animation-fill-mode: forwards;
            opacity: 0;">
            {{ post.title }}
          </h2>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        posts: []
      }
    },
    mounted() {
      this.fetchPosts()
    },
    methods: {
      async fetchPosts() {
        const response = await fetch('https://dummyjson.com/posts')
        this.posts = await response.json()
      }
    }
  }
</script>
<style>
  @keyframes title-anim {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .hover\:scale-110:hover {
    transform: scale(1.1);
  }
</style>
<script setup>
  const router = useRouter()
  const back = () => {
    router.back()
  }
</script>