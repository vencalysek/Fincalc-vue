<template>
    <div>
        <!-- INPUT FORM -->
        <form @submit="pushToHolder">
            <div class="row">
                <div class="input-field">
                    <input id="title" type="text" v-model="title">
                    <label for="title">Title</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field">
                    <input id="monthPayment" type="number" step="any" v-model.number="monthPayment">
                    <label for="monthPayment">Monthly Payment</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field">
                    <input id="annualIntrest" type="number" step="any" v-model.number="annualIntrest">
                    <label for="annualIntrest">Annual Intrest <span class="units">[%]</span></label>
                </div>
            </div>

            <div class="row">
                <div class="input-field">
                    <input id="investHorizon" type="number" step="any" v-model.number="investHorizon">
                    <label for="investHorizon">Investment Horizon <span class="units">[years]</span></label>
                </div>
            </div>


            <div class="btn-container">
                <button class="btn">Submit<i class="material-icons right">send</i></button>
            </div>            
        </form> <!-- INPUT FORM -->

        <!-- HOLDER -->
        <div v-if="holder != ''" class="result-holder">
            
            <!-- month payment -->
            <p>Monthly Payment:  <span>{{ holder.monthPayment }} Kč</span></p>

            <!-- anual intrest -->
            <p>Expected annual intrest: <span>{{ holder.annualIntrest }} %</span></p>

            <!-- invest horizon -->
                <!-- if else for year / years -->
            <p v-if="holder.investHorizon == 1" >Investment Horizon: <span>{{ holder.investHorizon }} year</span></p>
            <p v-else-if="holder.investHorizon > 1" >Investment Horizon: <span>{{ holder.investHorizon }} years</span></p>

            <!-- total payment -->
            <p>Total payment: <span>{{ holder.paidValue }} Kč</span></p>

            <!-- final value -->
                <!-- if else for year / years -->
            <p v-if="holder.investHorizon == 1" class="final-value">Final value after {{ holder.investHorizon }} year is: <span>{{ holder.finalValue}} Kč</span></p>
            <p v-else-if="holder.investHorizon > 1" class="final-value">Final value after {{ holder.investHorizon }} years: <span>{{ holder.finalValue}} Kč</span></p>

            <!-- netprofit -->
            <p v-if="holder.netProfit > 0" class="profit-value">Total net profit: <span>+ {{ holder.netProfit }}</span></p>
            <p v-else-if="holder.netProfit <= 0" class="profit-value">Total net profit: <span> {{ holder.netProfit }}</span></p>

            <!-- save button -->
            <div class="btn-container">
                <button @click="saveInvest" class="btn btn-save">save<i class="large material-icons right">add</i></button>
            </div>


        </div><!-- HOLDER -->
        
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                months: 12,
                monthPayment: null,
                annualIntrest: null,
                investHorizon: null,
                holder: ''
            }
        },
        methods: {
            pushToHolder(e) {
                e.preventDefault();

                // todo spustit pouze pokud jsou pole vyplnena
                if (this.title != '' && this.monthPayment != null && this.annualIntrest != null && this.investHorizon != 0) {

                    // todo spocitat konecnou hodnotu
                    let currentValue = 0;
                    for (let i = 0; i < this.investHorizon; i++) {
                        currentValue = Math.floor((currentValue + parseInt(this.    monthPayment)*this.months) * Math.pow(1+this.annualIntrest/100,1)*100)/100
                    }
                    
                    // todo spocitat cisty profit
                    let netProfitCount = Math.floor((currentValue - this.   monthPayment*this.investHorizon*this.months)*100)/100

                    // todo vytvorit novy objekt
                    const newData = {
                        id: Math.random()*10,
                        title: this.title,
                        monthPayment: this.monthPayment,
                        annualIntrest: this.annualIntrest,
                        investHorizon: this.investHorizon,
                        finalValue: currentValue,
                        paidValue: this.monthPayment*this.investHorizon*this.months,
                        netProfit: netProfitCount
                    }

                    // todo vlozit novy objekt do holderu
                    this.holder = newData;

                    // todo reset inputu
                    this.title = ''
                    this.monthPayment = null,
                    this.annualIntrest = null,
                    this.investHorizon = null
                } else {
                    alert('Please fill all the inputs...')
                }
            },
            saveInvest() {
                // todo odeslat data do parent componentu
                this.$emit('save-invest', this.holder)
                // this.holder = ''
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
    }
    .btn-save{
        margin-top: 0;
    }
    .btn-container {
        display: flex;
        justify-content: center;
    }
</style>