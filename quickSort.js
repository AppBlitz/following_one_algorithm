
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1]; // Elegir el último elemento como pivote
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// Driver code
const arr = [10, 7, 8, 9, 1, 5];

console.log("Original array:");
console.log(arr.join(" "));

// Medir tiempo de ejecución
const start = performance.now(); // Iniciar medición de tiempo
const sortedArray = quickSort(arr);
const end = performance.now(); // Finalizar medición de tiempo

console.log("Sorted array:");
console.log(sortedArray.join(" "));

// Mostrar tiempo de ejecución
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
