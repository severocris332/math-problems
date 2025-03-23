function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), ...left, ...right, ...quickSort(right)];
}
