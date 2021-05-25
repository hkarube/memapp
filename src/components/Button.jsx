import React from 'react';
import {
  View, Text, StyleSheet,
} from 'react-native';

import { string } from 'prop-types';

export default function button(props) {
  const { labl } = props;
  return (
    <View style={styles.bottonContainer}>
      <Text style={styles.bottonLabel}>{labl}</Text>
    </View>
  );
}

button.propTypes = {
  labl: string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottonContainer: {
    backgroundColor: '#467Fd3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },

  bottonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 32,
    paddingVertical: 8,
    color: '#ffffff',
  },
});
