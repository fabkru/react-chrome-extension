import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('can hold content', () => {
	const tree = renderer
		.create(<Button content={'Test'} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('does not render when isVisible is false', () => {
  const tree = renderer
    .create(<Button isVisible={false} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('does render when isVisible is true', () => {
	const tree = renderer
		.create(<Button isVisible={true} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('can have additional class names', () => {
	const tree = renderer
		.create(<Button additionalClassNames={'test'} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
