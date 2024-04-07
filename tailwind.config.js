/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        colors: {
            primary: 'var(--color-primary)',
            white: 'white',
            black: 'black'
        },

        extend: {
            spacing: {
                'heightHeader': 'var(--height-header)',
            }
        },
    },
    plugins: [],
}