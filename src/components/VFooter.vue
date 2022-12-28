<template>
    <footer class="footer">
        <div class="container__footer">
            <small>© <a href="http://nell-maissin.be">Nell Maissin</a> — 2023</small>
        </div>
    </footer>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.footer{
  background-color: #1111137a;
  &__links{
    display: flex;
    gap: 16px;
  }
}

.container__footer{
    padding: 8px 16px;
    max-width: 1600px;
    margin: auto;
}
</style>