/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        container: {
            padding: '1rem',
            center: true,
        },
        extend: {
            fontFamily: {
                Roboto: ['Roboto', 'sans-serif'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
