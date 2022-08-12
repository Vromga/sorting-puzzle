const sortByReference = require('./sort-by-reference');

test('should return empty array', () => {
  const result = sortByReference([], []);
  expect(result).toEqual([])
});

test('should return new array without sorting', () => {
  const result = sortByReference([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
});

test('should return sorted array', () => {
  const result = sortByReference([4, 7, 5, 8, 3, 6, 9], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(result).toEqual([1, 2, 4, 7, 5, 8, 3, 6, 9])
});

test('should return ascending array', () => {
  const result = sortByReference([], [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9])
});

test('should return empty array', () => {
  const result = sortByReference([4, 7, 5, 8, 3, 6, 9], []);
  expect(result).toEqual([])
});

test('should return sorted array', () => {
  const result = sortByReference([4, 8, 5, 7, 3, 6, 9], [7, 8, 9, 10]);
  expect(result).toEqual([8, 7, 9, 10])
});

test('should return sorted array', () => {
  const result = sortByReference([4, 8, 5, 7, 3, 6, 9], [1, 2, 3, 4, 5, 6, 7]);
  expect(result).toEqual([1, 2, 4, 5, 7, 3, 6])
});

test('should return sorted array', () => {
  const result = sortByReference([3], [1, 2, 3, 4, 5, 6, 7]);
  expect(result).toEqual([1, 2, 3, 4, 5, 6, 7])
});

test('should return sorted array', () => {
  const result = sortByReference([3], [21, 22, 23]);
  expect(result).toEqual([21, 22, 23])
});