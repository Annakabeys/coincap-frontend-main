<template>
  <CryptoDashboard>
    <template #header> </template>

    <template #assets>
      <section class="main">
        <dl v-if="crypto.assets.length > 0" class="assets">
          <dt>Name</dt>
          <dt>Price</dt>
          <dt>Symbol</dt>
          <dt>Rank</dt>
          <template v-for="asset in crypto.assets" :key="asset">
            <dd>{{ asset.name }}</dd>
            <dd>{{ asset.priceUsd }}</dd>
            <dd>{{ asset.symbol }}</dd>
            <dd>{{ asset.rank }}</dd>
          </template>
        </dl>

        <dl v-else>
          <p>No assets found</p>
        </dl>
      </section>
    </template>

    <template #portfolios>
      <cd-button @click="openAddPortfolioModal = true">+ Add Portfolio</cd-button>

      <div v-if="openAddPortfolioModal" class="modal">
        <div class="modal-content">
          <portfolio-form @add-portfolio="closeModal" />
          <button @click="closeModal" class="close-button">
            <span class="close-icon">X</span>
          </button>
        </div>
      </div>

      <section>
        <div v-for="portfolio in store.portfolios" :key="portfolio.id">
          <h2>Portfolio: {{ portfolio.name }}</h2>
          <cd-button button-type="submit" button-name="delete-portfolio" @click="store.deletePortfolio(portfolio.id)"> Delete Portfolio </cd-button>
          <cd-button @click="openHoldingsModal[portfolio.id] = true">+ Add Holdings</cd-button>

          <div v-if="openHoldingsModal[portfolio.id]" class="modal">
            <div class="modal-content">
              <holdings-form @add-holdings="closeModal" />
              <button @click="closeModal" class="close-button">
                <span class="close-icon">X</span>
              </button>
            </div>
          </div>

          <cd-button @click="openEditPortfolioModal[portfolio.id] = true">+ Edit Portfolio Name</cd-button>

          <div v-if="openEditPortfolioModal[portfolio.id]" class="modal">
            <div class="modal-content">
              <edit-name-form @edit-portfolio="closeModal" />
              <button @click="closeModal" class="close-button">
                <span class="close-icon">X</span>
              </button>
            </div>
          </div>
          <dl class="portfolios">
            <dt>HOLDINGS</dt>
            <dt>QUANTITY</dt>
            <dd>{{ portfolio.holdings }}</dd>
            <dd>{{ portfolio.quantity }}</dd>
          </dl>
        </div>
      </section>
    </template>

    <template #footer> </template>
  </CryptoDashboard>
</template>

<script setup lang="ts">
import CryptoDashboard from '../components/templates/CryptoDashboard.vue'
import PortfolioForm from '../components/organisms/cd-portfolio-form.vue'
import HoldingsForm from '../components/organisms/cd-holdings-form.vue'
import EditNameForm from '../components/organisms/cd-edit-portfolio-name.vue'
import CdButton from '../components/atoms/cd-button.vue'
import { useCrypto } from '@/composables/useCrypto.ts'
import { usePortfolio } from '@/composables/usePortfolio.ts'
import { ref, reactive } from "vue";

const crypto = useCrypto()
const store = usePortfolio()

const openAddPortfolioModal = ref(false)
const openEditPortfolioModal = reactive({})
const openHoldingsModal = reactive({})

const closeModal = () => {
  openAddPortfolioModal.value = false
  for (const key in openHoldingsModal) {
    openHoldingsModal[key] = false
  }
  for (const key in openEditPortfolioModal) {
    openEditPortfolioModal[key] = false
  }
}
</script>

<style scoped>
.assets {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  color: black;
}

.portfolios {
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: black;
}

dl,
dd,
dt {
  border: 1px solid black;
}

dt {
  text-align: center;
}

dd,
dt {
  padding: 1rem;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 30%;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
}

.close-icon {
  font-size: 20px;
  color: #000;
}
</style>
