<script setup>
// https://genshinlist.com/developer-api
// https://api.genshin.dev/nations/inazuma/icon
// https://api.genshin.dev/characters/albedo/portrait
import HelloWorld from './components/HelloWorld.vue';
import PostCard from './components/PostCard.vue';
import { onMounted, ref } from 'vue'

const endpointCharacters = `https://api.genshin.dev/characters/`;
const characters = ref([]);
const charactersDetails = ref([]);
fetch(endpointCharacters)
.then(response => response.json())
.then(data => {
  characters.value = data
  console.log(characters.value)
  return characters.value;
})
.then(data => {
  data.forEach(function(chara) {
    fetch(`https://api.genshin.dev/characters/${chara}`)
    .then(response => response.json())
    .then(data => {
      charactersDetails.value.push(data);
    })
  });
  console.log(charactersDetails.value)
  return charactersDetails.value;
});

// // Characters list
// const endpointCharacters = `https://api.genshin.dev/characters/`;
// const characters = ref([]);

// const fetchCharacters = async () => {
//   const charaResponse = await fetch(endpointCharacters)
//   return await charaResponse.json()
// }

// onMounted(async () => {
//   const charactersResponse = await fetchCharacters()

//   characters.value = charactersResponse
//   console.log(charactersResponse)

// })




// // for(let character of characters){
// //     const endpointCharactersDetails = `https://api.genshin.dev/characters/${character}`;
// //     const charactersDetails = ref([]);

// //     const fetchCharactersDetails = async () => {
// //     const charadetailsfetchResponse = await fetch(endpointCharactersDetails)
// //     return await charadetailsfetchResponse.json()
// //     }

// //     onMounted(async () => {
// //       const charadetailsResponse = await fetchCharactersDetails()

// //       charactersDetails.value = charadetailsResponse
// //       console.log(charadetailsResponse)
// //     })
// //   }

// // Nations list
// const endpointNations = `https://api.genshin.dev/nations/`;
// const nations = ref([]);

// const fetchNations = async () => {
//   const nationfetchResponse = await fetch(endpointNations)
//   return await nationfetchResponse.json()
// }

// onMounted(async () => {
//   const nationsResponse = await fetchNations()

//   nations.value = nationsResponse
//   console.log(nationsResponse)
// })

</script>

<template>
  <div class="home">
    <h1>This is the Homepage</h1>
    <!-- Exemple de lien à utiliser pour lier vos cards à la page `Post` -->
    <!-- <pre>{{posts}}</pre> -->
    <!-- <VLoader v-if="posts.length === 0">Chargement du post...</VLoader> -->
    <section class="container">
      <PostCard v-for="character in charactersDetails"
          :title="character.title"
          :name="character.name"
          :vision="character.vision"
      />
    </section>
    

    <!-- <div class="articles">
      <div class="articles__el" v-for="post in posts">
        <h2>{{post.title}}</h2>
        <p>{{post.body}}</p>
        <ul class="articles__list" v-for="tag in post.tags">
          <li>{{tag}}</li>          
        </ul>
      </div>
    </div> -->
    
  </div>
</template>

<style scoped>

</style>
