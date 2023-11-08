import { defineStore } from 'pinia'
import { ref, reactive } from 'vue'

// interface Portfolio {
//   id: string
//   name: string
//   holdings: string
//   quantity: number
// }

export const usePortfolio = defineStore('portfolios', {
  state: () => {
    const portfolios = ref([{
      id: '',
      name: '',
      holdings: '',
      quantity: 0.00,
    }])

    const url = 'http://localhost:9000/portfolios'
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok.')
        }
        return res.json() as Promise<[]>
      })
      .then((data) => {
        console.log(data)
        portfolios.value = data
      })
      .catch((error) => {
        console.error('Error:', error)
      })

    const portfolioForm = reactive({
      name: '',
      holdings: '',
      quantity: 0.00
    })

    const addPortfolio = async () => {
      const url = 'http://localhost:9000/portfolio-add'

      const data = {
        name: portfolioForm.name,
        holdings: portfolioForm.holdings,
        quantity: portfolioForm.quantity
      }

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data, null, 2)
        })

        if (!response.ok) {
          throw new Error('Failed to add portfolio')
        }
        portfolios.value.push({id: '', name: portfolioForm.name, holdings: portfolioForm.holdings, quantity: portfolioForm.quantity});
      } catch (error) {
        console.error('Error:', error)
      }
      console.log(data)
    }

    const deletePortfolio = async (id: string) => {
      const url = `http://localhost:9000/portfolio-delete/${id}`

      try {
        const response = await fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'
          }
        })

        if (!response.ok) {
          throw new Error('Failed to delete portfolio')
        }

        const index = portfolios.value.findIndex((portfolio) => portfolio.id === id)
        if (index !== -1) {
          portfolios.value.splice(index, 1)
        }
      } catch (error) {
        console.error('Error:', error)
      }
    }

    const holdingsForm = reactive({
      holdings: '',
      quantity: 0
    })

    const editPortfolioNameForm = reactive({
      name: '',
    })

    const editPortfolioName = async (id: string) => {
      const url = `http://localhost:9000/portfolio-edit/${id}`;
      
      const newName = editPortfolioNameForm.name;
    
      try {
        const response = await fetch(url, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ newName }),
        });
    
        if (!response.ok) {
          throw new Error('Failed to edit portfolio name');
        }
    
        const portfolioToUpdate = portfolios.value.find((portfolio) => portfolio.id === id);
        if (portfolioToUpdate) {
          portfolioToUpdate.name = newName;
          const index = portfolios.value.findIndex((portfolio) => portfolio.id === id);
          if (index !== -1) {
            portfolios.value.splice(index, 1, portfolioToUpdate);
          } else {
            console.error('Portfolio not found in the array.');
          }
        } else {
          console.error('Portfolio not found in the array.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
      console.log(newName);
    };
     
    
    return {
      portfolios,
      portfolioForm,
      addPortfolio,
      deletePortfolio,
      holdingsForm,
      editPortfolioName,
      editPortfolioNameForm,
    }
  }
})
