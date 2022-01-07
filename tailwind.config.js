module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            white: '#FFF',
            grey: { 100: '#F6FBFF', 200: '#F4F6F7', 300: '#686B7F' },
            whiteBlue: '#EFF7FF',
            blue: { 100: '#208AE5', 200: '#0A315F' },
            orange: '#FF7900',
        },
        fontSize: {
            title: '20px',
            subTitle: '14px',
            p: '10px',
            pLarge: '12px',
        },
        extend: {},
    },
    plugins: [],
};
