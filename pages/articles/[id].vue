<template>
    <div>
        <NavBar />
        <div class="sm:grid grid-cols-2 gap-10 px-10 py-10 sm:items-center sm:mb-[60px]">
            <div
                class="sm:flex sm:w-[600px] sm:h-[300px] justify-center mx-auto w-[300px] h-[300px] bg-[url('https://source.unsplash.com/random/')] fade-in">
            </div>
            <div class="items-center">
                <h2 class="text-4xl my-7 ">{{ post.title }}</h2>
                <h3 class="font-bold border-b-2 mb-4 pb-2 mx-auto">Article description</h3>
                <p class="mb-7 text-justify">{{ post.body }}</p>
            </div>
        </div>
    </div>
</template>
<style>
    .fade-in {
        animation-name: fadeIn;
        animation-duration: 2s;
    }

    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
</style>
<script setup>
    const route = useRoute()
    const postId = ref(route.params.id)
    const {
        data: post
    } = await useFetch(`https://dummyjson.com/posts/${postId.value}`)
</script>