// The mergeSort function sorts an array using the merge
// sort algorithm.
function mergeSort(array) {
  // Base case: if the array has 1 or 0 elements, it is
  // already sorted.
  if (array.length <= 1) {
    return array;
  }

  // Split the array in half.
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort the left and right halves.
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Merge the sorted left and right halves.
  const result = [];
  while (sortedLeft.length > 0 && sortedRight.length > 0) {
    if (sortedLeft[0] <= sortedRight[0]) {
      result.push(sortedLeft.shift());
    } else {
      result.push(sortedRight.shift());
    }
  }
  result.push(...sortedLeft, ...sortedRight);

  return result;
}

export default mergeSort;
