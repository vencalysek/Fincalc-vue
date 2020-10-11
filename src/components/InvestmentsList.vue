<template>
    <div>
        <div v-for="invest in investments" :key="invest.id">
            <p>{{ invest.title }}</p>
            <p>{{ invest.price }}</p>
            <p>{{ invest.annualIntrest }}</p>
        </div>

    </div>
</template>

<script>
    export default {
        props: ['investments']
    }
</script>

<style>

</style>