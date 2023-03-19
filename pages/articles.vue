<template>
  <div class="container mx-auto py-8">
    <h2 class="text-2xl font-bold mb-4">Latest Articles</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div v-for="article in articles" :key="article.id" class="bg-white rounded-lg shadow-lg overflow-hidden">
        <img class="w-full h-56 object-cover" src="https://source.unsplash.com/random/400x300" alt="Random image">
        <div class="p-6">
          <h3 class="font-medium text-gray-900 mb-2">{{ article.title }}</h3>
          <p class="text-gray-600">{{ article.description }}</p>
          <a href="#" class="text-indigo-600 hover:text-indigo-900">Read more →</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: []
    }
  },
  mounted() {
    fetch('https://dummyjson.com/quotes')
      .then(response => response.json())
      .then(data => {
        this.articles = data
      })
      .catch(error => console.error(error))
  }
}
</script>
