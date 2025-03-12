
function createList(n) {
  let list = [];
  for (let i = 0; i < n; i++) {
    let number = Math.random() * n;
    list[i] = Math.floor((number));
  }
  return list; // Retornar la lista generada
}

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
  if (arr.length === 0) return; // Manejar caso de arreglo vacío

  let n = arr.length;
  let buckets = Array.from({ length: n }, () => []);

  // Colocar los elementos en diferentes buckets
  for (let i = 0; i < n; i++) {
    let bi = Math.min(Math.floor((arr[i] / n) * n), n - 1); // Asegurar índice válido
    buckets[bi].push(arr[i]);
  }

  // Ordenar buckets individuales usando insertion sort
  for (let i = 0; i < n; i++) {
    insertionSort(buckets[i]);
  }

  // Concatenar todos los buckets en arr[]
  let index = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }
}

// Código principal
let arr = createList(10000000); // Crear lista con 9 elementos

// Medir tiempo de ejecución
console.log("Array original:");
console.log(arr.join(" "));

const start = performance.now(); // Iniciar cronómetro
bucketSort(arr);
const end = performance.now(); // Detener cronómetro

console.log("Array ordenado:");
console.log(arr.join(" "));

// Mostrar tiempo de ejecución
console.log(`El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`);
