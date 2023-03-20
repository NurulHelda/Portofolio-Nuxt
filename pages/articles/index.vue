<template>
        <NavBar />

<section class="bg-white py-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <button class="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-red-500 text-white  font-bold py-2 px-4 rounded-md shadow-md" @click="back">Back</button>
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-6">
         <marquee width="50%">Articles</marquee>
        </h2>
        <p class="mt-4 text-lg text-gray-500 justify-center">
          A place where share my thoughts and experiences on various topics.
        </p>
      </div>
    </div>
  </section>
  <div class=" sm:px-20 px-10 container mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <NuxtLink :to="`/articles/${post.id}`" v-for="post in posts.posts" :key="post.id" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img class="h-48 w-full object-cover object-center" :src="`https://source.unsplash.com/random/400x300/?${post.tags[1]}`" alt="Random image">
        <div class="p-4">
          <h2 class="font-bold text-lg mb-2">{{ post.title }}</h2>
          <p class="text-gray-700 text-base">{{ post.body }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
  <Footer />

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

<script setup>
const router = useRouter()
const back = () => {
  router.back()
}

</script>