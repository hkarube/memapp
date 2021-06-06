import React, { useState } from 'react';
import { shape, string } from 'prop-types';
import {
  View, TextInput, StyleSheet,
} from 'react-native';

import CircleBotton from '../components/CircleButton';
import KeyboardSafeView from '../components/KeyboardSafeView';

export default function MemoEditScreen(props) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, SetBody] = useState(bodyText);
  return (
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChageText={(text) => { SetBody(text); }}
        />
      </View>
      <CircleBotton
        name="check"
        onPress={() => { navigation.goBack(); }}
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
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top', // android
    fontSize: 16,
    lineHeight: 24,
  },
});
