import { render } from '@testing-library/react';
import AddItem from './AddList';

test('render the string "a" when adding the first list', () => {
  const { container } = render(<AddItem hasAtLeastOneItem={false} />);
  const addItemPlaceholder = container.querySelector('[class*="add-item__placeholder"]');
  expect(addItemPlaceholder.textContent).toContain('+ Add a list');
});

test('render the string "another" when adding a list while there isat least one previous list', () => {
  const { container } = render(<AddItem hasAtLeastOneItem={true} />);
  const addItemPlaceholder = container.querySelector('[class*="add-item__placeholder"]');
  expect(addItemPlaceholder.textContent).toContain('+ Add another list');
});

