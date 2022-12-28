<template>
  
  <section class="content">

    <h1>About</h1>
    <div>
      <p>This website doesn't host any Mihoyo related content. Everything is fetched from <a href="https://genshin.dev/">Genshin.dev</a>.</p>
      <p><a href="https://genshin.hoyoverse.com/en/">Genshin Impact</a> is Mihoyo's property and is in no way affiliated with this website's author.</p>
    </div>

    <small>© <a href="http://nell-maissin.be">Nell Maissin</a> — 2023</small>

  </section>
    
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'


</script>

<style scoped lang="scss">
.content{
    height: calc(100vh - 178px);

  @media(min-width: 370px){
    height: calc(100vh - 160px);
  }

  & > * {
    margin-bottom: 8px;
  }
}

</style>
