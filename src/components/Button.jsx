import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet,
} from 'react-native';

import { func, string } from 'prop-types';

export default function button(props) {
  const { labl, onPress } = props;
  return (
    <TouchableOpacity style={styles.bottonContainer} onPress={onPress}>
      <Text style={styles.bottonLabel}>{labl}</Text>
    </TouchableOpacity>
  );
}

button.propTypes = {
  labl: string.isRequired,
  onPress: func,
};

button.defaultProps = {
  onPress: null,
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
