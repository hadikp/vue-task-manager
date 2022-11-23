import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCog, faIgloo, faPlus, faUserAstronaut} from '@fortawesome/free-solid-svg-icons'

import { createPinia } from 'pinia'

library.add(faCog, faIgloo, faPlus, faUserAstronaut)

createApp(App)
    .use(createPinia())
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
