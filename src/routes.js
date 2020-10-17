import InvestmentsList from './components/InvestmentsList.vue'
import Investment from './components/Investment.vue'
import AddInvest from './components/AddInvest.vue'


export const routes = [
    {path: '/', component: AddInvest},
    {path: '/saved', component: InvestmentsList},
]