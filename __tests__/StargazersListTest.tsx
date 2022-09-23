import TestRenderer from 'react-test-renderer';
import React from 'react';
import {StargazersList} from '../src/components/StargazersList';
import {stargazersMocks} from '../__mocks__/getStargazerList';

describe('StargazersList', () => {
  it('should match the snapshot with loading true and stargazers list', () => {
    expect(
      TestRenderer.create(
        <StargazersList loading={true} stargazers={stargazersMocks} />,
      ),
    ).toMatchSnapshot();
  });

  it('should match the snapshot with loading false and stargazers list', () => {
    expect(
      TestRenderer.create(
        <StargazersList loading={false} stargazers={stargazersMocks} />,
      ),
    ).toMatchSnapshot();
  });

  it('should match the snapshot with loading true and empty stargazers list', () => {
    expect(
      TestRenderer.create(<StargazersList loading={true} stargazers={[]} />),
    ).toMatchSnapshot();
  });

  it('should match the snapshot with loading false and empty stargazers list', () => {
    expect(
      TestRenderer.create(<StargazersList loading={false} stargazers={[]} />),
    ).toMatchSnapshot();
  });
});
