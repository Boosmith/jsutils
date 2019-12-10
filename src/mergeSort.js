function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const splitIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, splitIndex);
  const right = arr.slice(splitIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    }

    if (right[0] < left[0]) {
      results.push(right.shift());
    }
  }
  results = [...results, ...left, ...right];
  return results;
}

module.exports = mergeSort;
