import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitl}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
        </View>

        <View>
          <Feather name="x" size={16} color="#848484" />
        </View>
      </View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitl}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#848484" />
        </View>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListTitl}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年12月24日 10:00</Text>
        </View>
        <View>
          <Feather name="x" size={16} color="#848484" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListTitl: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
});
