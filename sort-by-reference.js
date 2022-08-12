function sortByReference(oldArray, newArray) {
  const ONE_ELEMENT = 1;

  if (isAscending(oldArray)) {
    return newArray;
  }
  const newElementsThatInOldArray = newArray.filter(n => oldArray.some(x => x === n));
  const minNumber = Math.min(...newElementsThatInOldArray);
  const maxNumber = Math.max(...newElementsThatInOldArray);
  const indexOldMinDateInNewBalanceGroup = newArray.findIndex(v => v === minNumber);
  const indexOldMaxDateInNewBalanceGroup = newArray.findIndex(v => v === maxNumber);
  const lowGroupDate = newArray.slice(0, indexOldMinDateInNewBalanceGroup);
  const highGroupDate = newArray.slice(indexOldMaxDateInNewBalanceGroup + ONE_ELEMENT);
  const sortedBalancesByOldOrder = newElementsThatInOldArray.sort((a, b) => {
    const i1 = oldArray.indexOf(a);
    const i2 = oldArray.indexOf(b);
    return i1 - i2;
  });
  return [...lowGroupDate, ...sortedBalancesByOldOrder, ...highGroupDate];
}

function isAscending(arr) {
  return arr.every(
    (el, index) => index === 0 || el > arr[index - 1],
  );
}

module.exports = sortByReference;
