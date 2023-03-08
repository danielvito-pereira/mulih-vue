import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'

createApp(App).use(store).mount('#app')


const button = document.querySelector('button');/*me permite selecionar os dois elementos  */
const nav    = document.querySelector('nav');

button.addEventListener('click',()=>{
  nav.classList.toggle('activo')
})