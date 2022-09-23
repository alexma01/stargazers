import TestRenderer from 'react-test-renderer';
import React from 'react';
import {InputComponent} from '../src/components/InputComponent';

describe('InputComponent', () => {
  it('should match the snapshot with text (test)', () => {
    expect(
      TestRenderer.create(<InputComponent text="test" />),
    ).toMatchSnapshot();
  });

  it('should match the snapshot with placeholder (placeholderTest) and text (test)', () => {
    expect(
      TestRenderer.create(
        <InputComponent placeholder="placeholderTest" text="test" />,
      ),
    ).toMatchSnapshot();
  });
});
