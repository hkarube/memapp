import React, { useState } from 'react';
import {
  View, Text, TextInput, StyleSheet, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function LogInScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.titl}> Sing Up</Text>
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
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Memolist' }],
            });
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >

            <Text style={styles.footerLink}> Log In.</Text>
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
