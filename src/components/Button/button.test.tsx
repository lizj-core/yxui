import React from 'react';
import { render } from '@testing-library/react';
import Button from './button';

test("button test", () => {
  const wrapper = render(<Button>gg</Button>)
  const element = wrapper.queryByText('gg')
  expect(element).toBeTruthy()
})