// Pigeonhole Sort in JavaScript
function pigeonholeSort(arr) {
  let n = arr.length;

  // Find the minimum and maximum values in the array
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  // Calculate the range
  let range = max - min + 1;

  // Create empty pigeonholes
  let holes = new Array(range).fill(0);

  // Place elements into their respective pigeonholes
  for (let i = 0; i < n; i++) {
    holes[arr[i] - min]++;
  }

  // Collect sorted elements back into the array
  let index = 0;
  for (let i = 0; i < range; i++) {
    while (holes[i] > 0) {
      arr[index++] = i + min;
      holes[i]--;
    }
  }
}
function createList(n) {
  let list = [];
  for (let i = 0; i < n; i = i + 1) {
    let number = Math.random() * n;
    list[i] = Math.floor(number);
  }
  return list;
}
// Driver code
let arr = createList(10);
console.log("Original array: ", arr);

// Measure execution time
const start = performance.now(); // Start timing
pigeonholeSort(arr);
const end = performance.now(); // End timing

// Display sorted array
console.log("Sorted array: ", arr);

// Display execution time
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
