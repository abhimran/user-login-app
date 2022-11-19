// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDKVoYDFneprrTc5vMjMBKk5G2GH1cRdf8',
  authDomain: 'fir-auth-1-bf48d.firebaseapp.com',
  projectId: 'fir-auth-1-bf48d',
  storageBucket: 'fir-auth-1-bf48d.appspot.com',
  messagingSenderId: '727360151000',
  appId: '1:727360151000:web:680ff31072c23e57e766ad',
  measurementId: 'G-2VP81XXP5G',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;
export { auth };
