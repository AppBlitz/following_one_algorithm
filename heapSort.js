
// which is an index in arr[].
function heapify(arr, n, i) {
  // Initialize largest as root
  let largest = i;

  // left index = 2*i + 1
  let l = 2 * i + 1;

  // right index = 2*i + 2
  let r = 2 * i + 2;

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  // If largest is not root
  if (largest !== i) {
    let temp = arr[i]; // Swap
    arr[i] = arr[largest];
    arr[largest] = temp;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Main function to do heap sort
function heapSort(arr) {
  let n = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
}

// A utility function to print array of size n
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] + " ");
  }
  console.log();
}

function createList(n) {
  let list = [];
  for (let i = 0; i < n; i = i + 1) {
    let number = Math.random() * n;
    list[i] = Math.floor((number));
  }
  return list;
}
// Driver's code
let arr = createList(10);
console.log("Original array is:");
printArray(arr);

// Medir tiempo de ejecución
const start = performance.now(); // Inicio del tiempo
heapSort(arr);
const end = performance.now(); // Fin del tiempo

console.log("Sorted array is:");
printArray(arr);

// Mostrar tiempo de ejecución
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
