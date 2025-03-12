// Javascript program to perform TimSort.
let MIN_MERGE = 32;

function minRunLength(n) {
  let r = 0;
  while (n >= MIN_MERGE) {
    r |= n & 1;
    n >>= 1;
  }
  return n + r;
}

function insertionSort(arr, left, right) {
  for (let i = left + 1; i <= right; i++) {
    let temp = arr[i];
    let j = i - 1;

    while (j >= left && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
}

function merge(arr, l, m, r) {
  let len1 = m - l + 1,
    len2 = r - m;
  let left = new Array(len1);
  let right = new Array(len2);
  for (let x = 0; x < len1; x++) {
    left[x] = arr[l + x];
  }
  for (let x = 0; x < len2; x++) {
    right[x] = arr[m + 1 + x];
  }

  let i = 0;
  let j = 0;
  let k = l;

  while (i < len1 && j < len2) {
    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }

  while (i < len1) {
    arr[k] = left[i];
    k++;
    i++;
  }

  while (j < len2) {
    arr[k] = right[j];
    k++;
    j++;
  }
}

function timSort(arr, n) {
  let minRun = minRunLength(MIN_MERGE);

  for (let i = 0; i < n; i += minRun) {
    insertionSort(arr, i, Math.min(i + MIN_MERGE - 1, n - 1));
  }

  for (let size = minRun; size < n; size = 2 * size) {
    for (let left = 0; left < n; left += 2 * size) {
      let mid = left + size - 1;
      let right = Math.min(left + 2 * size - 1, n - 1);

      if (mid < right) merge(arr, left, mid, right);
    }
  }
}


function createList(n) {
  let list = [];
  for (let i = 0; i < n; i += 1) {
    let number = Math.random() * n;
    list[i] = Math.floor(number);
  }
  return list;
}
let arr = createList(50);

globalThis.console.log("Given Array is \n");
console.log(arr.join());

const start = performance.now(); // Inicio de la medición del tiempo
timSort(arr, arr.length);
const end = performance.now(); // Fin de la medición del tiempo

globalThis.console.log("After Sorting Array is \n");
console.log(arr.join())

// Mostrar el tiempo de ejecución
globalThis.console.log(
  `El tiempo de ejecución fue: ${(end - start).toFixed(4)} ms`,
);
