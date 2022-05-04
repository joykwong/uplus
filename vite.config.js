import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    css: {
        postcss: {
            plugins: [
                require('postcss-import'),
                require('tailwindcss')({
                    //darkMode: 'media',
                    //theme: { extend: {} },
                    content: [
                        './public/**/*.html',
                        './src/**/*.{js,jsx,ts,tsx,vue}'
                    ]
                    /*,
                    plugins: [
                        require('@tailwindcss/forms'),
                        require('@tailwindcss/line-clamp'),
                        require('@tailwindcss/typography'),
                        require('@tailwindcss/aspect-ratio')
                    ]*/
                }),
                require('autoprefixer')
            ]
        }
    },
    plugins: [vue({
        reactivityTransform: true
    })]
})