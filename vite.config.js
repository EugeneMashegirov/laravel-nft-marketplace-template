import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

const path = require('path')

export default defineConfig({
    resolve:{
        alias:{
          '@' : path.resolve(__dirname, 'public'),
        },
    },
    plugins: [
        laravel({
            input: ['resources/js/app.js'],
            refresh: true,
        }),
    ],
});
