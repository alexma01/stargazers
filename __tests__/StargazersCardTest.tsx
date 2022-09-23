import TestRenderer from 'react-test-renderer';
import React from 'react';
import {StargazersCard} from '../src/components/StargazersCard';
import {Stargazer} from '../src/models/Stargazer';

describe('StargazersCard', () => {
  it('should match the snapshot with username and avatar image', () => {
    const stargazer: Stargazer = {
      username: 'test',
      avatar: 'https://avatars.githubusercontent.com/u/18049606?v=4',
    };
    expect(
      TestRenderer.create(<StargazersCard stargazer={stargazer} />),
    ).toMatchSnapshot();
  });

  it('should match the snapshot with username and empty image', () => {
    const stargazer: Stargazer = {
      username: 'test',
      avatar: '',
    };
    expect(
      TestRenderer.create(<StargazersCard stargazer={stargazer} />),
    ).toMatchSnapshot();
  });

  it('should match the snapshot with empty username and empty image', () => {
    const stargazer: Stargazer = {
      username: '',
      avatar: '',
    };
    expect(
      TestRenderer.create(<StargazersCard stargazer={stargazer} />),
    ).toMatchSnapshot();
  });
});
