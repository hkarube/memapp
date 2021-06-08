import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, TextInput, StyleSheet, Alert,
} from 'react-native';

import firebase from 'firebase';

import CircleBotton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, SetBody] = useState(bodyText);

  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      ref.set({
        bodyText: body,
        updateAt: new Date(),
      }, { marge: true }) // 更新したくない値がある場合はこの行を追加する
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert(error.code);
        });
    }
  }
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => { SetBody(text); }}
        />
      </View>
      <CircleBotton
        name="check"
        onPress={handlePress}
      />
    </KeyboardSafeView>
  );
}

MemoEditScreen.prototype = {
  route: shape({
    params: shape({ id: string, bodyText: string }),
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top', // android
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,

  },
});
