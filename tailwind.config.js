module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            white: '#FFF',
            grey: {
                100: '#F6FBFF',
                200: '#F4F6F7',
                300: '#D4D4D4',
                400: '#686B7F',
            },
            whiteBlue: '#EFF7FF',
            blue: { 100: '#208AE5', 200: '#0A315F', 300: '#062140' },
            orange: '#FF7900',
            green: {
                100: '#D8FFF0',
                200: '#AFEDD5',
                300: '#0C5237',
                400: '#2FC33A',
            },
            pink: { 100: '#FFE5E5', 200: '#DB2828' },
        },
        fontSize: {
            title: '16px',
            titleLarge: '20px',
            subTitle: '14px',
            p: '10px',
            pLarge: '12px',
            subText: '8px',
        },
        extend: {},
    },
    plugins: [],
};
