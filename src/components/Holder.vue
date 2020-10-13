<template>
    <div v-if="investHolder !== ''" class="investment-container container">
        <p>Invest Title: <span>{{ investHolder.title }}</span></p>

        <p>Monthly Payment:  <span>{{ investHolder.monthPayment }} Kč</span></p>

        <p>Expected annual intrest: <span>{{ investHolder.annualIntrest }} %</span></p>

        <!-- if else for year / years -->
        <p v-if="investHolder.investHorizon == 1" >Investment Horizon: <span>{{ investHolder.investHorizon }} year</span></p>
        <p v-else-if="investHolder.investHorizon > 1" >Investment Horizon: <span>{{ investHolder.investHorizon }} years</span></p>
        
        <!-- if else for year / years -->
        <p v-if="investHolder.investHorizon == 1" class="final-value">Final value after {{ investHolder.investHorizon }} year is: <span>{{ investHolder.finalValue}} Kč</span></p>
        <p v-else-if="investHolder.investHorizon > 1" class="final-value">Final value after {{ investHolder.investHorizon }} years is: <span>{{ investHolder.finalValue}} Kč</span></p>

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
        width: 68%;
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
        border-top: 1px solid teal;
        border-bottom: 1px solid teal;
    }

</style>