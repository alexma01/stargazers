import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {InputComponent} from '../components/InputComponent';
import {StargazersList} from '../components/StargazersList';
import {useDebounce} from '../hooks/useDebounce';
import useGetStargazers from '../hooks/useGetStargazers';

const PAGE_INITIAL = 1;
const PER_PAGE_INITIAL = 20;

export const HomeScreen = () => {
  const [page, setPage] = useState<number>(PAGE_INITIAL);
  const [perPage, setPerPage] = useState<number>(PER_PAGE_INITIAL);

  const [searchTextOwner, setSearchTextOwner] = useState<string>('');
  const [searchTextRepository, setSearchTextRepository] = useState<string>('');

  const stargazers = useGetStargazers();

  const debouncedOwner = useDebounce({value: searchTextOwner, delay: 500});
  const debouncedRepository = useDebounce({
    value: searchTextRepository,
    delay: 500,
  });

  useEffect(
    () => {
      if (debouncedOwner || debouncedRepository) {
        stargazers.onFetch(
          debouncedOwner,
          PAGE_INITIAL,
          PER_PAGE_INITIAL,
          debouncedRepository,
        );

        setPage(PAGE_INITIAL + 1);
        setPerPage(PER_PAGE_INITIAL);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [debouncedOwner, debouncedRepository],
  );

  const onEndReached = useCallback(() => {
    setPage(page + 1);
    stargazers.onFetch(debouncedOwner, page, perPage, debouncedRepository);
  }, [debouncedOwner, debouncedRepository, page, perPage, stargazers]);

  return (
    <View testID="homescreen" style={styles.container}>
      <View style={styles.inputsContainer}>
        <InputComponent
          testID="ownerInput"
          placeholder="OWNER"
          text={searchTextOwner}
          onChangeText={setSearchTextOwner}
        />
        <InputComponent
          testID="repositoryInput"
          placeholder="REPOSITORY"
          text={searchTextRepository}
          onChangeText={setSearchTextRepository}
        />
      </View>
      <View style={styles.containerList}>
        <StargazersList
          loading={stargazers.loading}
          stargazers={stargazers.data}
          onEndReached={onEndReached}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#eff9f2',
  },
  inputsContainer: {
    flex: 1,
  },
  containerList: {
    flex: 3,
  },
});
