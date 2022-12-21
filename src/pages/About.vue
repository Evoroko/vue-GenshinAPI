<template>
    <div class="movie-detail">
  
      <section v-if="post !== null">
        <h1>{{post.title}}</h1>
        <p>{{post.body}}</p>
        <ul class="tags">
                  <li
                  class="tags-item"
                  v-for="(tag, index) in post.tags"
                  :key="index"
                  >
                      {{tag}}
                  </li>
              </ul>
      </section>
      <div v-else>
        <VLoader>Chargement du post...</VLoader>
      </div>
  
      <RouterLink to="/">Retour à la page home</RouterLink>
    </div>
  </template>
  
  <script setup>
  import VLoader from '../components/VLoader.vue'
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  
  const id = route.params.id
  
  
  
  // Dé-commenter les deux lignes ci-dessous
  const endpoint = `https://dummyjson.com/posts/${id}`
  const post = ref(null);
  
  const fetchPost = async () => {
    const response = await fetch(endpoint)
    return await response.json()
  }
  
  onMounted(async () => {
    const response = await fetchPost()
  
    post.value = response
  })
  </script>
  
  <style scoped lang="scss">
  
  .tags{
      display: flex;
      gap: 0.5rem;
      margin-top: 0.5rem;
  
      &-item{
          color: white;
          background-color: teal;
          border-radius: 2px;
          padding: 0.2rem 0.4rem;
      }
  }
  
  </style>
  