/* eslint "require-jsdoc": 0 */

export function findMissing(arr) {
  let step = arr[1] - arr[0] > arr[arr.length - 1] - arr[arr.length - 2] ?
  arr[1] - arr[0] : arr[arr.length - 1] - arr[arr.length - 2];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];
    if (curr - step !== arr[i - 1] && i !== 0) return curr - step;
  }
}
