/* JavaScript program for Bitonic Sort.
Note: This program works only when the size of input is a power of 2. */

/* The parameter dir indicates the sorting direction,
ASCENDING or DESCENDING; if (a[i] > a[j]) agrees
with the direction, then a[i] and a[j] are
interchanged. */
function compAndSwap(a, i, j, dir) {
  if ((a[i] > a[j] && dir === 1) || (a[i] < a[j] && dir === 0)) {
    // Swapping elements
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
  }
}

/* It recursively sorts a bitonic sequence in ascending
order, if dir = 1, and in descending order otherwise
(means dir=0). The sequence to be sorted starts at
index position low, the parameter cnt is the number
of elements to be sorted. */
function bitonicMerge(a, low, cnt, dir) {
  if (cnt > 1) {
    const k = Math.floor(cnt / 2);
    for (let i = low; i < low + k; i++) compAndSwap(a, i, i + k, dir);
    bitonicMerge(a, low, k, dir);
    bitonicMerge(a, low + k, k, dir);
  }
}

/* This function first produces a bitonic sequence by
recursively sorting its two halves in opposite sorting
orders, and then calls bitonicMerge to make them in
the same order */
function bitonicSort(a, low, cnt, dir) {
  if (cnt > 1) {
    const k = Math.floor(cnt / 2);

    // Sort in ascending order since dir here is 1
    bitonicSort(a, low, k, 1);

    // Sort in descending order since dir here is 0
    bitonicSort(a, low + k, k, 0);

    // Merge the whole sequence in ascending order
    // since dir=1.
    bitonicMerge(a, low, cnt, dir);
  }
}

/* Caller of bitonicSort for sorting the entire array
of length N in ASCENDING order */
function sort(a, N, up) {
  bitonicSort(a, 0, N, up);
}

/* A utility function to print array */
function printArray(arr) {
  console.log(arr.join(" "));
}

// Driver method
function createList(n) {
  let list = [];
  for (let i = 0; i < n; i = i + 1) {
    let number = Math.random() + n;
    list[i] = Math.floor(number);
  }
  return list;
}
const a = createList(100000);
const up = 1;

console.log("Original array:");
printArray(a);

// Measure execution time
const start = performance.now();
sort(a, a.length, up);
const end = performance.now();

console.log("Sorted array:");
printArray(a);

// Display execution time
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
