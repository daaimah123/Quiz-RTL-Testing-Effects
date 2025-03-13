import React from 'react';
import Counter from "../Counter"
import { render, fireEvent, cleanup } from "@testing-library/react"

afterEach(cleanup)

test("count starts with 0 and button is disabled", () => {
  const { getByTestId } = render(<Counter />)

  const countElement = getByTestId("count")
  const buttonElement = getByTestId("button")

  expect(countElement).toHaveTextContent("Clicked 0 times")
  expect(buttonElement).toBeDisabled()
})

test("checking the checkbox enables the button", () => {
  const { getByTestId } = render(<Counter />)

  const buttonElement = getByTestId("button")
  const checkboxElement = getByTestId("checkbox")

  expect(buttonElement).toBeDisabled()

  fireEvent.click(checkboxElement)

  expect(buttonElement).not.toBeDisabled()
})

test("clicking enabled button increments counter", () => {
  const { getByTestId } = render(<Counter />)

  const countElement = getByTestId("count")
  const buttonElement = getByTestId("button")
  const checkboxElement = getByTestId("checkbox")

  // Enable the button first
  fireEvent.click(checkboxElement)

  // Click the button once
  fireEvent.click(buttonElement)

  // Verify the count is now 1
  expect(countElement).toHaveTextContent("Clicked 1 time")

  // Click the button again
  fireEvent.click(buttonElement)

  // Verify the count is now 2
  expect(countElement).toHaveTextContent("Clicked 2 times")
})

test("document title updates when checkbox is checked", () => {
  // Set initial document title
  const originalTitle = "My Awesome App"
  document.title = originalTitle

  const { getByTestId } = render(<Counter />)

  const buttonElement = getByTestId("button")
  const checkboxElement = getByTestId("checkbox")

  // Enable the button and update title
  fireEvent.click(checkboxElement)

  // Verify title shows count of 0
  expect(document.title).toBe("Total number of clicks: 0")

  // Click the button
  fireEvent.click(buttonElement)

  // Verify title updates to count of 1
  expect(document.title).toBe("Total number of clicks: 1")

  // Uncheck the checkbox
  fireEvent.click(checkboxElement)

  // Verify title reverts to original
  expect(document.title).toBe(originalTitle)
})
