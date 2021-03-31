import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

function Hello(props) {
  const { children } = props;
  return (
    <View>
      <Text tyle={styles.Text}>
          hello {children}
        </Text>
    </View>
  );
}

Hello.propTypes = {
  children: string.isReqired,
};

const styles = StyleSheet.create({
  Text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 16,
  },
});

export default Hello;
