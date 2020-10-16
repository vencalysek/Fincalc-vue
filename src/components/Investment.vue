<template>
    <div class="investment-container" >
        <p class="title">{{ investment.title }}</p>
        <p>Monthly Payment:  <span>{{ investment.monthPayment }} Kč</span></p>
        <p>Expected annual intrest: <span>{{ investment.annualIntrest }} %</span></p>
        <!-- if else for year / years -->
        <p v-if="investment.investHorizon == 1" >Investment Horizon: <span>{{ investment.investHorizon }} year</span></p>
        <p v-else-if="investment.investHorizon > 1" >Investment Horizon: <span>{{ investment.investHorizon }} years</span></p>

        <!-- if else for year / years -->
        <p v-if="investment.investHorizon == 1" class="final-value">Final value after {{ investment.investHorizon }} year is: <span>{{ investment.finalValue}} Kč</span></p>
        <p v-else-if="investment.investHorizon > 1" class="final-value">Final value after {{ investment.investHorizon }} years is: <span>{{ investment.finalValue}} Kč</span></p>

        <p v-if="investment.netProfit > 0" class="profit-value">Total net profit: <span>+ {{ investment.netProfit }}</span></p>
        <p v-else-if="investment.netProfit <= 0" class="profit-value">Total net profit: <span> {{ investment.netProfit }}</span></p>

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
    }
    .title{
        display: flex;
        justify-content: center;
        text-transform: capitalize;
        font-style: italic;
        font-weight: bold;
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
        .final-value {
        font-size: 18px;
        border-top: 2px solid teal;
    }
    .profit-value {
        font-size: 18px;
        border-bottom: 2px solid teal;
    }

</style>