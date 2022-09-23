import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

interface Props {
  testID?: string;
  placeholder?: string;
  text: string;
  onChangeText?: (text: string) => void;
}

export const InputComponent = ({
  placeholder,
  onChangeText,
  text,
  testID,
}: Props) => {
  return (
    <View>
      <Text style={styles.label}>{placeholder}</Text>
      <TextInput
        testID={testID}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 15,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    color: 'gray',
    borderBottomWidth: 2,
    backgroundColor: 'white',
    paddingLeft: 15,
    borderRadius: 10,
  },
});
