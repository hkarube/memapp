import React from 'react';
import firebase from 'firebase';
// import MemolistScreen from './src/screens/MemoListScreen';
// import MemoEditScreen from './src/screens/MemoEditScreen';
// import MemoCreateScreen from './src/screens/MemoCreateScreen';
// import LogInScreen from './src/screens/LogInScreen';
import SighUpScreen from './src/screens/SighUpScreen';

const firebaseConfig = {
  apiKey: 'AIzaSyDY-ixzRax3CWNaz7_ULdmDfhSpc5bwQb0',
  authDomain: 'memoapp-92e74.firebaseapp.com',
  projectId: 'memoapp-92e74',
  storageBucket: 'memoapp-92e74.appspot.com',
  messagingSenderId: '787235384712',
  appId: '1:787235384712:web:4c79594bc8e576361f5e3d',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <SighUpScreen />
  );
}
