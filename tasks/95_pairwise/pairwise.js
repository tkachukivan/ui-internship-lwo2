export function pairwise(arr, arg) {
  let sum = 0;
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arg && arr[j] <= arg && arr[i] + arr[j] == arg) {
        sum += i + j;
        arr[i] = arr[j] = undefined;
      }
    }
  }
  return sum;
}
