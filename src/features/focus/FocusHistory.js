import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, paddingSizes, spacing } from '../../utils/sizes';

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  const HistoryItem = ({ item, index }) => {
    //console.log(item);
    return <Text style={styles(item.status).historyItem}>{item.subject}</Text>;
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5, alignItems: 'center' }}>
        {!!focusHistory.length && (
          <>
            <Text style={styles().title}>Things we've focused on</Text>

            <FlatList
              styles={{ flex: 1 }}
              contentContainerStyle={{ flex: 1, alignItems: 'center' }}
              data={focusHistory}
              renderItem={HistoryItem}
            />
            <View style={styles().clearContainer}>
              <RoundedButton
                size={75}
                title="Clear"
                onPress={() => {
                  onClear();
                }}
              />
            </View>
          </>
        )}
      </SafeAreaView>
    </>
  );
};

const styles = (status) =>
  StyleSheet.create({
    historyItem: {
      color: status > 1 ? 'red' : 'green',
      //color: 'red',
      fontSize: fontSizes.md,
    },
    title: {
      color: 'white',
      fontSize: fontSizes.lg,
    },
    clearContainer: {
      alignItems: 'center',
      padding: spacing.md,
    },
  });
