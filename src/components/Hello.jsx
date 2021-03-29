import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Hello() {
  return (
    <View>
      <Text style={styles.Text}>Hello</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bolt',
    padding: 16,
  },
});

export default Hello;
