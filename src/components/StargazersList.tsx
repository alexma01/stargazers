import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ListRenderItemInfo,
} from 'react-native';
import {Stargazer} from '../models/Stargazer';
import {StargazersCard} from './StargazersCard';

interface Props {
  stargazers: Stargazer[];
  loading: boolean;
  onEndReached?: () => void;
}

export const StargazersList = (props: Props) => {
  return (
    <View style={styles.container}>
      {props.stargazers.length > 0 && (
        <FlatList
          testID="StargazersList"
          contentContainerStyle={{marginHorizontal: 10}}
          style={styles.list}
          data={props.stargazers}
          renderItem={({item}: ListRenderItemInfo<Stargazer>) => (
            <StargazersCard stargazer={item} />
          )}
          keyExtractor={(item: Stargazer) => item.username}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          onEndReached={props.onEndReached}
          onEndReachedThreshold={0.1}
        />
      )}
      {props.stargazers.length === 0 && (
        <View style={styles.no_results}>
          <Text>NO RESULTS</Text>
        </View>
      )}
      {props.loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  no_results: {
    height: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  loadingContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
});
