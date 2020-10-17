<template>
    <div class="investment-container" >
        <div class="title-btn-wrap">
            <p class="title">{{ investment.title }}</p>
            
            <button @click="$emit('del-invest', investment.id)" 
                    class="btn-small btn-floating red">
                    <i class="large material-icons">remove</i>
            </button>

        </div>
        
        <p>Monthly Payment:  <span>{{ investment.monthPayment }} Kč</span></p>
        <p>Expected annual intrest: <span>{{ investment.annualIntrest }} %</span></p>
        <!-- if else for year / years -->
        <p v-if="investment.investHorizon == 1" >Investment Horizon: <span>{{ investment.investHorizon }} year</span></p>
        <p v-else-if="investment.investHorizon > 1" >Investment Horizon: <span>{{ investment.investHorizon }} years</span></p>

        <p>Total payment: <span>{{ investment.paidValue }} Kč</span></p>

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
    .title-btn-wrap {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .title-btn-wrap button {
        margin-left: 20px;
    }
    .del-btn {
        margin-left: 25px;
    }
</style>