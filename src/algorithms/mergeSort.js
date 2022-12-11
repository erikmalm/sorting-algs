// The mergeSort function sorts an array using the merge
// sort algorithm.
function mergeSort(array) {
  // Base case: if the array has 1 or 0 elements, it is
  // already sorted. Return the array as an intermediate
  // state.
  if (array.length <= 1) {
    return [array];
  }

  // Split the array in half.
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort the left and right halves, and
  // store the intermediate states in leftStates and
  // rightStates.
  const leftStates = mergeSort(left);
  const rightStates = mergeSort(right);

  // Merge the sorted left and right halves, and store
  // the intermediate states in result.
  const result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
    result.push([...left, ...right]);
  }
  result.push(...left, ...right);

  // Concatenate the leftStates, rightStates, and
  // result arrays to get the array of intermediate
  // states for the entire sorting process.
  return [...leftStates, ...rightStates, ...result];
}


export default mergeSort;
