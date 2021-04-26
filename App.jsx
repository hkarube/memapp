import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appber}>
        <View style={styles.appberInner}>
          <Text>Memo Appssss</Text>
          <Text style={styles.appberRight}>ログアウト</Text>
        </View>
      </View>

      <View>
        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2020年12月24日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      <View>
        <Text>+</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
  appber: {
    width: '100%',
    height: 104,
    backgroundColor: '#467FD3',
    justifyContent: 'flex-end',
  },
  appberInner: {
    backgroundColor: 'gray',
  },
  appberRight: {
    position: 'absolute',
    right: 19,
    bottom: 8,
  },

});
