import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleBotton from './src/components/CircleButton';

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
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleBotton>+</CircleBotton>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },

});
