import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';
import { translateErrors } from '../utils';
import CancelLogIn from '../components/CancelLogIn';

// import format from 'date-fns/esm/locale/fr/index.js';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CancelLogIn />,
    });
  }, []);

  // []はコンポーネントがマウントされた時一度だけcallbackが実行される
  // 例えばバックボタンでメモリストに戻ったときは実行されません。
  function handlePress() {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Memolist' }],
        });
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code);
        Alert.alert(errorMsg.title, errorMsg.description);
      })
      // どっちの場合も実行される
      .then(() => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.titl}> log In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none" // 先頭が小文字になるように設定
          keyboardType="email-address" // キーボードに＠を出します
          placeholder="Email Address" // 未入力で表示する文字列
          textContentType="emailAddress" // キーチェーンから取得できる
        />
        <TextInput
          style={styles.input}
          value={password}
          // アローファンクション =>
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none" // 先頭が小文字になるように設定
          placeholder="Password"
          secureTextEntry
          textContentType="password" // キーチェーンから取得できる
        />
        <Button
          labl="submit"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not regster</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SighUp' }],
              });
            }}
          >
            <Text style={styles.footerLink}> Sign up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  titl: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467Fd3',
  },
  footer: {
    flexDirection: 'row',
  },
});
