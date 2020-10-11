<template>
  <div class="container">
    <h3 class="center teal-text text-darken-4 teal lighten-5">FinCalc App</h3>
    <app-add-invest v-on:push-to-holder="pushToHolder" ></app-add-invest>
    
    <div v-if="investHolder != ''">
      <hr>
      <p> {{investHolder.title}} </p>
      <p> Investment price: {{investHolder.price}} Kč</p>
      <p> Expected annual intrest: {{investHolder.annualIntrest}} % </p>
      <button class="btn" @click="saveInvets">save</button>
    </div>


    <InvestmentsList :investments="investments" />
    
    
  </div>
</template>

<script>
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

      investHolder: ''
    }
  },
  components: {
    appAddInvest: AddInvest,
    InvestmentsList

  },
  methods: {
    saveInvets() {
      this.investments = [...this.investments, this.investHolder]
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

  h3 {
    border-radius: 5px;
  }

</style>
