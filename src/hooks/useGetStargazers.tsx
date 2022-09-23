import {useCallback, useRef, useState} from 'react';
import {Stargazer} from '../models/Stargazer';
import {fetchStargazers} from '../utils/api';

const useGetStargazers = () => {
  const prevOwner = useRef<string>();
  const prevRepository = useRef<string>();
  const prevPage = useRef<number>();
  const [data, setdata] = useState<Stargazer[]>([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState('');

  const fetchData = useCallback(
    async (
      ownerR: string,
      pageR: number,
      per_pageR: number,
      repositoryR: string,
    ) => {
      setloading(true);
      const stargazers = await fetchStargazers(
        ownerR,
        repositoryR,
        pageR,
        per_pageR,
      );
      console.log('FETCH', ownerR);
      console.log('FETCH', repositoryR);
      console.log('FETCH', pageR);
      console.log('FETCH', per_pageR);
      if (
        prevRepository.current === repositoryR &&
        prevOwner.current === ownerR &&
        prevPage.current !== pageR
      ) {
        setdata(stargazersPrev => [...stargazersPrev, ...stargazers]);
        prevPage.current = pageR;
        prevOwner.current = ownerR;
        prevRepository.current = repositoryR;
      } else {
        setdata(stargazers);
        prevPage.current = pageR;
        prevOwner.current = ownerR;
        prevRepository.current = repositoryR;
      }

      if (stargazers.length === 0) {
        seterror('NOT FOUND');
        setdata([]);
      }

      setloading(false);
    },
    [],
  );

  const onFetch = useCallback(
    (owner: string, page: number, per_page: number, repository: string) => {
      seterror('');
      if (owner && repository) {
        fetchData(owner, page, per_page, repository);
      }
    },
    [fetchData],
  );

  return {data, loading, error, onFetch};
};

export default useGetStargazers;
