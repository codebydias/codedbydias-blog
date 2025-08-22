/** @type {import('tailwindcss').Config} */
export const content = [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
];
export const theme = {
    extend: {
        colors: {
            primary: '#22c55e', // verde
            secondary: '#facc15', // amarelo
            neutral: '#9ca3af', // cinza
        },
    },
};
export const plugins = [];
