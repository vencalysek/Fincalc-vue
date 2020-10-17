<template>

    <ul>
        <router-link to="/" tag="li" active-class="active" exact><a class="btn">Add Invest</a></router-link>
        <router-link to="/saved" tag="li" active-class="active" exact><a class="btn">Saved</a></router-link>
    </ul>

</template>

<style scoped>
    ul {
        display: flex;
        justify-content: center;
    }
    li {
        margin: 0 5px;
    }
</style>