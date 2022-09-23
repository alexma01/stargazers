import {renderHook, act} from '@testing-library/react-hooks';
import useGetStargazers from '../src/hooks/useGetStargazers';
import {stargazersMocks} from '../__mocks__/getStargazerList';
import * as api from '../src/utils/api';

describe('useGetStargazers', () => {
  it('should match the snapshot', async () => {
    jest.spyOn(api, 'fetchStargazers').mockImplementationOnce(() => {
      return Promise.resolve(stargazersMocks);
    });

    const {result} = renderHook(() => useGetStargazers());

    expect(result.current.loading).toBe(false);
    await act(async () => {
      result.current.onFetch('dsdsd', 1, 20, 'dsds');
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toMatchSnapshot();
  });

  it('should return empty list', async () => {
    const {result} = renderHook(() => useGetStargazers());
    expect(result.current.loading).toBe(false);
    await act(async () => {
      result.current.onFetch('', 1, 20, '');
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.data).toMatchSnapshot();
  });
});
