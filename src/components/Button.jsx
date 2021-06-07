import React from 'react';
import {
  TouchableOpacity, Text, StyleSheet,
} from 'react-native';

import { func, string, shape } from 'prop-types';

export default function button(props) {
  const { labl, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.bottonContainer, style]} onPress={onPress}>
      <Text style={styles.bottonLabel}>{labl}</Text>
    </TouchableOpacity>
  );
}

button.propTypes = {
  labl: string.isRequired,
  onPress: func,
  style: shape(),
};

button.defaultProps = {
  onPress: null,
  style: null,
};

const styles = StyleSheet.create({
  bottonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24,
  },

  bottonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});
