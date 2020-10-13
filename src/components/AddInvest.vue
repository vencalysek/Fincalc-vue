<template>
    <div class="container">

        <form @submit="pushToHolder">
            <div class="row">
                <div class="input-field">
                    <input id="title" type="text" v-model="title">
                    <label for="title">Title</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field">
                    <input id="monthPayment" type="number" step="any" v-model="monthPayment">
                    <label for="monthPayment">Monthly Payment</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field">
                    <input id="annualIntrest" type="number" step="any" v-model="annualIntrest">
                    <label for="annualIntrest">Annual Intrest <span class="units">[%]</span></label>
                </div>
            </div>

            <div class="row">
                <div class="input-field">
                    <input id="investHorizon" type="number" step="any" v-model="investHorizon">
                    <label for="investHorizon">Investment Horizon <span class="units">[years]</span></label>
                </div>
            </div>


            <div class="container center">
                <input type="submit" class="btn" value="Submit">
            </div>            

        </form>

    </div>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                monthPayment: null,
                annualIntrest: null,
                investHorizon: null,
                finalValue: null
            }
        },
        methods: {
            pushToHolder(e) {
                e.preventDefault();
                if (this.title != '' && this.monthPayment != null && this.annualIntrest != null && this.investHorizon != 0) {
                    const newInvest = {
                        id: Math.random()*10,
                        title: this.title,
                        monthPayment: this.monthPayment,
                        annualIntrest: this.annualIntrest,
                        investHorizon: this.investHorizon,

                        // ! spatny vzorec, nepocita mesicni narust ale pouze vstupni kapital
                        finalValue: Math.floor(this.monthPayment*12*Math.pow(1+this.annualIntrest/100,this.investHorizon))

                    }
                    this.$emit('push-to-holder', newInvest)
                    this.title = ''
                    this.monthPayment = null,
                    this.annualIntrest = null,
                    this.investHorizon = null
                } else {
                    alert('Please fill all the inputs...')
                }
            }
        },
    }
</script>

<style scoped>
    form {
        margin-top: 50px;
    }
    .units {
        font-style: italic;
        font-weight: lighter;
    }
</style>