import React from 'react';
import Button from './Button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
	const tree = renderer
		.create(
			<Button
				content={'Test'}
			/>
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('does not render when isVisible is false', () => {
  const tree = renderer
    .create(
      <Button
        content={'Test'}
        isVisible={false}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
