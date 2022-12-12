export default function mergeSort(array) {
  // Base case: if the array has 1 or 0 elements, it is
  // already sorted. Return the array as the result.
  if (array.length <= 1) {
    return array;
  }

  // Split the array in half.
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort the left and right halves.
  const leftSorted = mergeSort(left);
  const rightSorted = mergeSort(right);

  // Merge the sorted left and right halves and return the result.
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
    if (leftSorted[leftIndex] <= rightSorted[rightIndex]) {
      result.push(leftSorted[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightSorted[rightIndex]);
      rightIndex++;
    }
  }
  // Add the remaining elements of left and right to the result.
  result.push(...leftSorted.slice(leftIndex), ...rightSorted.slice(rightIndex));

  return result;
}
