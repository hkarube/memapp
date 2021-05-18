import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleBotton from '../components/CircleButton';

export default function MemoDetailScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.memHeader}>
        <Text style={styles.memoListTitl}>買い物リスト</Text>
        <Text style={styles.memoListItemDate}>2020/23/24 10:00</Text>
      </View>
      <ScrollView style={styles.memoBoby}>
        <Text tyle={styles.memoText}>
          買い物詳細
        </Text>
      </ScrollView>
      <CircleBotton style={{ top: 160, bottom: 'auto' }}>+</CircleBotton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memHeader: {
    backgroundColor: '#467FD3',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoListTitl: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoListItemDate: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBoby: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
