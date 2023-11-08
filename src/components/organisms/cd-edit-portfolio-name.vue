<!-- <template>
  <div class="cd-form">
    <div v-for="portfolio in store.portfolios" :key="portfolio.id">
    <form action="/portfolio" name="portfolio-form" method="POST" @submit.prevent="store.editPortfolioName(portfolio.id, store.newName)">
      <cd-name v-model="store.newName" />
      <cd-button button-type="submit" button-name="edit-portfolio">Edit Portfolio</cd-button>
    </form>
    </div>
  </div>
</template> -->

<template>
  <div class="cd-form">
    <div v-for="portfolio in store.portfolios">
    <form name="edit-portfolio-form" method="POST" @submit.prevent="store.editPortfolioName(portfolio.id)">
      <cd-name v-model="store.editPortfolioNameForm.name" />
      <cd-button button-type="submit" button-name="edit-portfolio">Edit Portfolio</cd-button>
    </form>
  </div>
  </div>
</template>

<script setup lang="ts">
import CdName from '../molecules/cd-portfolio-name-input.vue'
import CdButton from '../atoms/cd-button.vue'
import { usePortfolio } from '@/composables/usePortfolio'

const store = usePortfolio()
</script>

<style scoped>
.cd-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: 2rem auto;
}

.cd-form input {
  padding: 10px;
  margin-bottom: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.cd-form button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.cd-form button:hover {
  background-color: #0056b3;
}
</style>
