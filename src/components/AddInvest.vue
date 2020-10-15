<template>
    <div>

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


            <div class="btn-container">
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
                investHorizon: null
            }
        },
        methods: {

            countFinalValue() {
                let currentValue = 0;
                for (let i = 0; i < this.investHorizon; i++) {
                    currentValue = Math.floor((currentValue + parseInt(this.monthPayment)*12) * Math.pow(1+this.annualIntrest/100,1)*100)/100
                    console.log(currentValue)
                }
                return currentValue
            },

            netProfit() {
                return this.countFinalValue() - this.monthPayment*12*this.investHorizon
            },

            pushToHolder(e) {
                e.preventDefault();
                if (this.title != '' && this.monthPayment != null && this.annualIntrest != null && this.investHorizon != 0) {
                    const newInvest = {
                        id: Math.random()*10,
                        title: this.title,
                        monthPayment: this.monthPayment,
                        annualIntrest: this.annualIntrest,
                        investHorizon: this.investHorizon,
                        paidValue: this.monthPayment*12*this.investHorizon,
                        finalValue: this.countFinalValue(),
                        netProfit: Math.floor(this.netProfit()*100)/100
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
    .units {
        font-style: italic;
        font-weight: lighter;
    }
    .btn {
        margin-top: -20px;
        display: flex;
        justify-content: center;
    }
    .btn-container {
        display: flex;
        justify-content: center;
    }
</style>