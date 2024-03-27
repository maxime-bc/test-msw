import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

async function enableMocking() {
    if (process.env.NODE_ENV !== 'development') {
      return
    }
   
    const { worker } = await import('./mocks/browser')
   
    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start()
  }

  enableMocking().then(() => {
    createApp(App).mount('#app')
  })


