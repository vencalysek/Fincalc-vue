<template>
  <div class="container">
    <h3 class="center teal-text text-darken-4 teal lighten-5">FinCalc App</h3>
    test
    <AddInvest v-on:push-to-holder="pushToHolder" />

    <Holder :investHolder="investHolder" v-on:save-invest="saveInvest" />

    <InvestmentsList v-show="investments.length > 0" :investments="investments" />
    
    
  </div>
</template>

<script>
import AddInvest from './components/AddInvest.vue';
import InvestmentsList from './components/InvestmentsList.vue';
import Holder from './components/Holder.vue'

export default {
  data () {
    return {
      investments: [
        // {id: 4, title: 'Test 1', price: 100000, annualIntrest: 10},
        // {id: 1, title: 'Test 2', price: 100000, annualIntrest: 7.5},
        // {id: 2, title: 'Test 3', price: 100000, annualIntrest: 6}
      ],

      investHolder: ''
    }
  },
  components: {
    AddInvest,
    InvestmentsList,
    Holder

  },
  methods: {
    saveInvest() {
      this.investments = [...this.investments, this.investHolder]
      this.investHolder = ''
    },
    pushToHolder(newInvest) {
      this.investHolder = newInvest
      console.log(this.investHolder)
    }
  },
}
</script>

<style>
  * {
    font-family: 'Montserrat', sans-serif;
  }

  .container {
    /* width: 60%;
    min-width: 450px; */
    max-width: 650px;
  }
  
  h3 {

    margin: 20px auto;
    border-radius: 2.5px;
  }

  .btn {
    outline: none;
  }
  

</style>
