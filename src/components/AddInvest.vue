<template>
    <div class="container">

        <form @submit="pushToHolder">
            <div class="row">
                <div class="input-field col s10">
                    <input id="title" type="text" v-model="title">
                    <label for="title">Title</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s10">
                    <input id="price" type="number" v-model="price">
                    <label for="price">Price</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field col s10">
                    <input id="annualIntrest" type="number" v-model="annualIntrest">
                    <label for="annualIntrest">Annual Intrest</label>
                </div>
            </div>
            <input type="submit" class="btn" value="Submit">

        </form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                price: null,
                annualIntrest: null,
            }
        },
        methods: {
            pushToHolder(e) {
                e.preventDefault();
                if (this.title != '' && this.price != null && this.annualIntrest != null ) {
                    const newInvest = {
                        id: Math.random()*10,
                        title: this.title,
                        price: this.price,
                        annualIntrest: this.annualIntrest,
                    }
                    this.$emit('push-to-holder', newInvest)
                    // this.title = ''
                    // this.price = null,
                    // this.annualIntrest = null
                } else {
                    alert('Please fill all the inputs...')
                }
            }
        },
    }
</script>

<style scoped>
    .input-field {
        margin-top: 0;
        margin-bottom: 0;
    }
</style>