import { render } from '@testing-library/react';
import AddList from './AddList';

test('render the string "a" when adding the first list', () => {
  const { container } = render(<AddList hasAtLeastOneList={false} />);
  const addListLabel = container.querySelector('[class*="add-list__label"]');
  expect(addListLabel.textContent).toContain('+ Add a list');
});

test('render the string "another" when adding a list while there isat least one previous list', () => {
  const { container } = render(<AddList hasAtLeastOneList={true} />);
  const addListLabel = container.querySelector('[class*="add-list__label"]');
  expect(addListLabel.textContent).toContain('+ Add another list');
});

