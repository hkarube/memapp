import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppBar from '../components/AppBar';
import CircleBotton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View>
      <AppBar>
        <View>
          <Text>買い物リスト</Text>
          <Text>2020/23/24 10:00</Text>
        </View>
        <View>
          <Text>
            買い物詳細
          </Text>
        </View>
        <CircleBotton>+</CircleBotton>
      </AppBar>
    </View>
  );
}
