import * as React from 'react';
import renderer from 'react-test-renderer';
import { MonoText } from '../StyledText';

it(`renders correctly`, () => {
  // eslint-disable-next-line react-native/no-raw-text
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
