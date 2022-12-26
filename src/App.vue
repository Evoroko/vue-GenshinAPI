<script setup>
import VLayout from './components/VLayout.vue';


</script>

<template>
  <VLayout>
    <router-view />
  </VLayout>
</template>

<style scoped lang="scss">
.container {
  max-width: 1440px;
  margin-inline: auto;
  padding: 5rem;
}
</style>
