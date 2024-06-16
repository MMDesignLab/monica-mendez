// vite.config.js
export default {
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                thankyou: './thankyou.html'
            }
        }
    }
}