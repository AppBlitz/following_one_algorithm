
function insertionSort(bucket) {
  for (let i = 1; i < bucket.length; ++i) {
    let key = bucket[i];
    let j = i - 1;
    while (j >= 0 && bucket[j] > key) {
      bucket[j + 1] = bucket[j];
      j--;
    }
    bucket[j + 1] = key;
  }
}

function bucketSort(arr) {
  let n = arr.length;
  let buckets = Array.from({ length: n }, () => []);

  // Put array elements in different buckets
  for (let i = 0; i < n; i++) {
    let bi = Math.floor(n * arr[i]);
    buckets[bi].push(arr[i]);
  }

  // Sort individual buckets using insertion sort
  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);
  }

  // Concatenate all buckets into arr[]
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }
}

// Driver code
let arr = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];

// Measure execution time
console.log("Original array:");
console.log(arr.join(" "));

const start = performance.now(); // Start timing
bucketSort(arr);
const end = performance.now(); // End timing

console.log("Sorted array is:");
console.log(arr.join(" "));

// Display execution time
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
