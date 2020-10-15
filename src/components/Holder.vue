<template>
    <div v-if="investHolder !== ''" class="investment-container">
        <!-- <p class="title">{{ investHolder.title }}</p> -->

        <p>Monthly Payment:  <span>{{ investHolder.monthPayment }} Kč</span></p>

        <p>Expected annual intrest: <span>{{ investHolder.annualIntrest }} %</span></p>

        <!-- if else for year / years -->
        <p v-if="investHolder.investHorizon == 1" >Investment Horizon: <span>{{ investHolder.investHorizon }} year</span></p>
        <p v-else-if="investHolder.investHorizon > 1" >Investment Horizon: <span>{{ investHolder.investHorizon }} years</span></p>

        <p>Total payment: <span>{{ investHolder.paidValue }} Kč</span></p>
        
        <!-- if else for year / years -->
        <p v-if="investHolder.investHorizon == 1" class="final-value">Final value after {{ investHolder.investHorizon }} year is: <span>{{ investHolder.finalValue}} Kč</span></p>
        <p v-else-if="investHolder.investHorizon > 1" class="final-value">Final value after {{ investHolder.investHorizon }} years: <span>{{ investHolder.finalValue}} Kč</span></p>


        <p v-if="investHolder.netProfit > 0" class="profit-value">Total net profit: <span>+ {{ investHolder.netProfit }}</span></p>
        <p v-else-if="investHolder.netProfit <= 0" class="profit-value">Total net profit: <span> {{ investHolder.netProfit }}</span></p>

        <div class="center container">
            <button class="btn" v-on:click="$emit('save-invest')">save</button>
        </div>
        
    </div>
</template>

<script>
    export default {
        props: ['investHolder']
    }
</script>

<style scoped>
    .investment-container {
        font-size: 16px;
    }
    p {
        display: flex;
        justify-content: space-between;
        font-style: normal;
        font-weight: normal;
        margin: 10px 0;
    }
    span {
        font-style: italic;
        font-weight: bold;
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