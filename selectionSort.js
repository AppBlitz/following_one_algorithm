// Function to swap values
function swap(arr, xp, yp) {
  [arr[xp], arr[yp]] = [arr[yp], arr[xp]];
}

// Function to implement selection sort
function selectionSort(arr) {
  // To get length of array
  let n = arr.length;

  // Variable to store index of smallest value
  let min;

  // variables to iterate the array
  let i, j;

  for (i = 0; i < n - 1; ++i) {
    min = i;
    for (j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) min = j;
    }

    // Swap if both indexes are different
    if (min != i) swap(arr, min, i);
  }
}

// Input array
const arr = [64, 25, 12, 22, 11];

// Display input array
console.log("Original array: " + arr);

// Measure execution time
const start = performance.now(); // Start timing
selectionSort(arr);
const end = performance.now(); // End timing

// Display output
console.log("After sorting: " + arr);

// Display execution time
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
