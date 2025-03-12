// Javascript program for implementation of Comb Sort

// To find gap between elements
function getNextGap(gap) {
  // Shrink gap by Shrink factor
  gap = parseInt((gap * 10) / 13, 10);
  if (gap < 1) return 1;
  return gap;
}

// Function to sort arr[] using Comb Sort
function sort(arr) {
  let n = arr.length;

  // initialize gap
  let gap = n;

  // Initialize swapped as true to
  // make sure that loop runs
  let swapped = true;

  // Keep running while gap is more than
  // 1 and last iteration caused a swap
  while (gap != 1 || swapped == true) {
    // Find next gap
    gap = getNextGap(gap);

    // Initialize swapped as false so that we can
    // check if swap happened or not
    swapped = false;

    // Compare all elements with current gap
    for (let i = 0; i < n - gap; i++) {
      if (arr[i] > arr[i + gap]) {
        // Swap arr[i] and arr[i+gap]
        let temp = arr[i];
        arr[i] = arr[i + gap];
        arr[i + gap] = temp;

        // Set swapped
        swapped = true;
      }
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
let arr = createList(10);
console.log(arr.join(" "))

// Measure execution time
const start = performance.now(); // Start timing
sort(arr);
const end = performance.now(); // End timing


// Display execution time
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
