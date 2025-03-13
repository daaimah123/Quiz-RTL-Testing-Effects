import React from 'react';
import Counter from '../Counter';
import { render, fireEvent, cleanup } from '@testing-library/react';

afterEach(cleanup);

test("count starts with 0", () => {
  // Render the Counter component
  const { getByTestId } = render(<Counter />)

  // Find the element with the test ID "count"
  const countElement = getByTestId("count")

  // Verify that its text content shows the initial count of 0
  expect(countElement).toHaveTextContent("Clicked 0 times")
})

test("clicking on button increments counter", () => {
  // Render the Counter component
  const { getByTestId, getByText } = render(<Counter />)

  // Find the button element
  const buttonElement = getByText("Increment")

  // Find the count display element
  const countElement = getByTestId("count")

  // Click the button once
  fireEvent.click(buttonElement)

  // Verify the count is now 1
  expect(countElement).toHaveTextContent("Clicked 1 time")

  // Click the button again
  fireEvent.click(buttonElement)

  // Verify the count is now 2
  expect(countElement).toHaveTextContent("Clicked 2 times")
})

test("multiple button clicks increment counter correctly", () => {
  // Render the Counter component
  const { getByTestId, getByText } = render(<Counter />)

  // Find the button element
  const buttonElement = getByText("Increment")

  // Find the count display element
  const countElement = getByTestId("count")

  // Click the button multiple times
  for (let i = 0; i < 5; i++) {
    fireEvent.click(buttonElement)
  }

  // Verify the count is now 5
  expect(countElement).toHaveTextContent("Clicked 5 times")
})

