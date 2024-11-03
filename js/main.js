import { createApp } from 'vue'
import HelloWorld from './hello-world.js'

// Tailwindcss configuration
tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
      },
    },
  },
}

createApp(HelloWorld).mount('#app')
