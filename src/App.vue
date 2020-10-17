<template>
  <div class="container">
    <h3 class="center teal-text text-darken-4 teal lighten-5">FinCalc App</h3>
    <Header />
    <AddInvest @save-invest="saveInvest" />

    <InvestmentsList 
      v-show="investments.length > 0" 
      :investments="investments" 
      @del-invest="deleteInvest" />
    
    
  </div>
</template>

<script>
import Header from './components/Header.vue';
import AddInvest from './components/AddInvest.vue';
import InvestmentsList from './components/InvestmentsList.vue';



export default {
  data () {
    return {
      investments: [
        // {id: 4, title: 'Test 1', price: 100000, annualIntrest: 10},
        // {id: 1, title: 'Test 2', price: 100000, annualIntrest: 7.5},
        // {id: 2, title: 'Test 3', price: 100000, annualIntrest: 6}
      ],
      savedInvestHolder: ''

    }
  },
  components: {
    Header,
    AddInvest,
    InvestmentsList

  },
  methods: {
    saveInvest(holder) {
      this.savedInvestHolder = holder
      this.investments = [...this.investments, this.savedInvestHolder]
      this.investHolder = ''
    },
    deleteInvest(id) {
      this.investments = this.investments.filter(invest => invest.id != id)
    }
  },
}
</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }

  .container {
    max-width: 650px;
  }

  p {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    font-style: normal;
    font-weight: normal;
    }

  span {
    font-style: italic;
    font-weight: bold;
  }

  h3 {
    margin: 20px auto;
    border-radius: 2.5px;
  }

  .btn {
    outline: none;
  }

  .investment-container {
    font-size: 16px;
  }

  .title{
    display: flex;
    justify-content: center;
    text-transform: capitalize;
    font-style: italic;
    font-weight: bold;
  }

  .final-value {
    font-size: 18px;
    border-top: 2px solid teal;
  }

  .profit-value {
    font-size: 18px;
    border-bottom: 2px solid teal;
  }

</style>
