import React, {memo} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Stargazer} from '../models/Stargazer';

interface Props {
  stargazer: Stargazer;
}

export const StargazersCard = memo(
  (props: Props) => {
    return (
      <View style={styles.container}>
        <Image style={styles.avatar} source={{uri: props.stargazer.avatar}} />
        <Text style={styles.textStyle}>{props.stargazer.username}</Text>
      </View>
    );
  },
  (prev, next) => {
    return prev.stargazer.username === next.stargazer.username;
  },
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    padding: '1%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  avatar: {
    width: 70,
    height: 70,
  },
  textStyle: {
    marginLeft: 10,
  },
});
