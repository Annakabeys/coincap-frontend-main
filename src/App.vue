<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainPage from './pages/MainPage.vue'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Cryptocurrency</RouterLink>
        <RouterLink to="/">Add Portfolio</RouterLink>
        <RouterLink to="/">Portfolios</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />

  <MainPage />
</template>

<style scoped></style>
