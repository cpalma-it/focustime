import React, {useState} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../../components/RoundedButton';
import {fontSizes, paddingSizes, spacing} from '../../utils/sizes';


export const Focus = ({addSubject}) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What would you like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput 
            style={{flex: 1, marginRight:20}}
            onChangeText={setSubject}
            value={subject}
            /*onSubmitEditing={
              ({ nativeEvent}) => {
                setTmpItem(nativeEvent.text)
              }
            }*/
            />
          <RoundedButton size={50} title='+' onPress={() => {addSubject(subject)}} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.md,
    justifyContent: 'center',
    alignItems:'center'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
    padding:paddingSizes.md

  },
  inputContainer:{
    padding:paddingSizes.md,
    flexDirection: 'row'
  }
});
