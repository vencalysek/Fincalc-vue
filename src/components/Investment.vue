<template>
    <div class="investment-container container" >
        <p>Invest Title: <span>{{ investment.title }}</span></p>
        <p>Monthly Payment:  <span>{{ investment.monthPayment }} Kč</span></p>
        <p>Expected annual intrest: <span>{{ investment.annualIntrest }} %</span></p>
        <!-- if else for year / years -->
        <p v-if="investment.investHorizon == 1" >Investment Horizon: <span>{{ investment.investHorizon }} year</span></p>
        <p v-else-if="investment.investHorizon > 1" >Investment Horizon: <span>{{ investment.investHorizon }} years</span></p>
        
        <!-- if else for year / years -->
        <p v-if="investment.investHorizon == 1" class="final-value">Final value after {{ investment.investHorizon }} year is: <span>{{ investment.finalValue}} Kč</span></p>
        <p v-else-if="investment.investHorizon > 1" class="final-value">Final value after {{ investment.investHorizon }} years is: <span>{{ investment.finalValue}} Kč</span></p>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'Investment',
        props: ['investment']
    }
</script>

<style scoped>
    .investment-container {
        font-size: 16px;
        width: 80%;
    }
    p {
        display: flex;
        justify-content: space-between;
        font-style: normal;
        font-weight: normal;
    }
    span {
        font-style: italic;
        font-weight: bold;
    }

</style>