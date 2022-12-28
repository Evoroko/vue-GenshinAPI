<template>
  <header class="header">
    <nav class="header__main-nav">
      <RouterLink class="header__logo" to="/"><h1>Genshin Impact App</h1></RouterLink>
      
      
      <ul class="header__links">
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li>
          <RouterLink to="/today">Today</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header{
  background-color: #111113;
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;

  &__main-nav{
    display: flex;
    padding: 16px;
    gap: 32px;
    align-items: baseline;
    max-width: 1600px;
    margin: auto;
  }

  h1{
    font-size: 20px;
    color: white;
    font-weight: 500;
  }

  &__links{
    display: flex;
    gap: 16px;
  }
}
</style>
