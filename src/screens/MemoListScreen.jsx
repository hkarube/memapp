import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import CircleBotton from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListScreen(props) {
  const { navigation } = props;
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  }, []);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    // ログアウト等でcurrentUserがNULLの場合
    // あらかじめunsubscribe変数に代入
    let unsubscribe = () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/memos`).orderBy('updateAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userMemos = []; // 一時的配列を生成
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          // データをセット
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updateAt: data.updateAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました');
      });
    }
    return unsubscribe; // 監視の中止
  }, []);
  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleBotton
        name="plus"
        onPress={() => { navigation.navigate('MemoCreate'); }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
