import transform from './transformation';

test('should transform for simple inputs', () => {
  const input = "1";
  const expectedOutput = "1";

  const actualOutput = transform(input);

  expect(actualOutput).toBe(expectedOutput);
});

test('should transform for inputs for more than one value', () => {
  const input = "1\n3";
  const expectedOutput = "1,3";

  const actualOutput = transform(input);

  expect(actualOutput).toBe(expectedOutput);
});

test('should remove repeated items', () => {
  const input = "1\n3\n4\n3";
  const expectedOutput = "1,3,4";

  const actualOutput = transform(input);

  expect(actualOutput).toBe(expectedOutput);
});