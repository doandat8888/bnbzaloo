import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    root: './src',
    base: '',
    scripts: {
      "dev": "vite",
      "build": "vue-tsc --noEmit && vite build",
      "build:debug": "vue-tsc --noEmit && vite build --debug",
    },
    plugins: [reactRefresh()],
  })
}
