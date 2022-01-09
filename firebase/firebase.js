import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: 'AIzaSyDb50IIwlNzRafP_kce3vgnVVoaVomtUHE',
    authDomain: 'triasse-app.firebaseapp.com',
    projectId: 'triasse-app',
    storageBucket: 'triasse-app.appspot.com',
    messagingSenderId: '999732655829',
    appId: '1:999732655829:web:57590300c687aa221e945c',
};
export const app = initializeApp(firebaseConfig);
export default app;
