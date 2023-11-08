<template>
  <div class="cd-form">
    <form action="/portfolio" name="portfolio-form" method="POST" @submit.prevent="store.addPortfolio">
      <cd-name v-model="store.portfolioForm.name"/>
      <cd-holdings v-model="store.portfolioForm.holdings"/>
      <cd-quantity v-model="store.portfolioForm.quantity"/>
      <cd-button button-type="submit" button-name="add-portfolio"> Add Portfolio </cd-button>
    </form>
  </div>
</template>

<script setup lang="ts">
import CdName from '../molecules/cd-portfolio-name-input.vue'
import CdHoldings from '../molecules/cd-portfolio-holdings-input.vue'
import CdQuantity from '../molecules/cd-portfolio-quantity-input.vue'
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
