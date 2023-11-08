import { defineStore } from 'pinia'
import { ref, onMounted } from 'vue'

export const useCrypto = defineStore ('assets', () => {
  const assets = ref([])
  const selectedAsset = ref('Bitcoin')

  onMounted(() => {
    const url = 'http://localhost:9000/'

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok.')
        }
        return res.json()
      })
      .then((data) => {
        console.log(data)
        assets.value = data
      })
      .catch((error) => {
        console.log('Error:', error)
      })
  });

  return {
    assets,
    selectedAsset,
  }
})