<template>
    <div>
        <div class="center">
            <h2 class="teal-text text-darken-4">
            Saved Investments
            </h2>
        </div>
        
        <div v-for="investment in investments" :key="investment.id">
            <Investment :investment="investment" />
        </div>

    </div>
</template>

<script>
    import Investment from './Investment.vue';

    export default {
        name: 'InvestmentsList',
        props: ['investments'],
        components: {
            Investment
        }
    }
</script>

<style scoped>
    h2 {
        display: inline-block;
        font-size: 24px;
        font-weight: bold;
        border-bottom: solid teal 2px;
    }
</style>