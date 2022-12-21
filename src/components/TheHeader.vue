<template>
  <header class="header">
    <nav class="header__main-nav">
      <div class="header__logo">Dummy Blog</div>
      
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/about">About</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  height: 10rem;
  background: #2c3e50;
  color: white;
  padding: 0 2rem;

  &__logo {
    font-size: 2rem;
    font-weight: 700;
  }

  &__main-nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 2rem;

    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      height: inherit;
      margin: 0;
      list-style: none;
    }

    li:not(:last-child)::after {
      content: '|';
      display: inline-block;
      margin-left: 1rem;
    }

    a {
      font-weight: bold;
      color: white;
    }

    a.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
