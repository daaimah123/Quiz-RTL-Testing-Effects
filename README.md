# RTL Testing Effects

## Add GIF of expected behavior here!!!

### Helpful Tips to Get You Started

##### Setup Commands
```
git clone <repo>
# install dependencies
npm i
# run and view application ui in browser
npm run start
# run and view test output 
npm run test
```

##### Syntax
- `useState`, `useRef`, and `useEffect` are only implementation details and have no impact in the tests
- `getByTestId` for dynamic text; returns false when no element present
- `fireEvent.click`
- `jest.useFakeTimers` when simulating checkbox action, even though the component has `onChange` callback
- Before setting up your test suites, you should use `afterEach(cleanup)` (after imports) in order to unmount any React trees that were mounted with render

### Create Three Tests for Counter Component

1️⃣ Count starts with 0
- Render the Counter component
- Find the element that displays the count using its test ID
- Assert that the count element displays the initial value of 0

2️⃣ Clicking on button increments counter
- Render the Counter component
- Find the button element by its text content
- Find the count display element by its test ID
- Simulate a click on the button
- Assert that the count has increased to 1 and uses singular form
- Simulate another click on the button
- Assert that the count has increased to 2 and uses plural form

3️⃣ Multiple button clicks increment counter correctly
- Render the Counter component
- Find the button element by its text content
- Find the count display element by its test ID
- Simulate multiple clicks on the button (5 times)
- Assert that the count has increased to 5