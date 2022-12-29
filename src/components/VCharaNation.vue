<template>
    <ul class="profile">
        <li v-for="(character, characterKey) in data">
            <RouterLink :to="`/character/${imgLink[characterKey]}`" class="profile__el">
            <img :src="'https://api.genshin.dev/characters/' + imgLink[characterKey] + '/icon-big'" alt="" class="profile__img">
            <p>{{ character.name }}</p>
            </RouterLink>
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
    data: {
        type: Array,
        required: true
    },
    imgLink: {
        type: Array,
        required: true
    }

})

</script>

<style scoped lang="scss">
.profile{

display: flex;
flex-wrap: wrap;
gap: 8px;
text-align: center;
justify-content: center;
margin-bottom: 32px;

@media(min-width: 513px){
  justify-content: flex-start;
  gap: 16px;
}

&__el{
  width: 130px;
  height: 180px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  padding: 8px;
  background-color: rgb(20, 20, 23);
  border-radius: 8px;
  color: white;

  @media(min-width: 513px){
    width: 150px;
    height: 200px;
  }

  &:hover{
    background-color: rgb(12, 12, 15);
  }


}

&__img{
  width: 130px;
  height: 130px;
  object-fit: contain;

  @media(min-width: 513px){
    width: 150px;
    height: 150px;
  }
}
}
</style>