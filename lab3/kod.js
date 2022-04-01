function radix(A) {
  let N = A.length;
  let cout = [];
  let max = 0,
    min = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] > max) max = A[i];
    if (A[i] < min) min = A[i];
  }
  for (let i = 0; i < max + 1; i++) {
    cout.push(0);
  }
  for (let i = 0; i < N; i++) {
    cout[A[i]]++;
  }
  let j = 0,
    i = 0;
  while (i < N) {
    if (cout[j] != 0) {
      cout[j]--;
      A[i] = j;
      i++;
    } else j++;
  }
  document.getElementById("out").append(massiv);
  //document.write(massiv);
}

let massiv = [];
let random = Math.round(Math.random() * 100);
console.log(random);
for (let i = 0; i < 15; i++) {
  random = Math.round(Math.random() * 100);
  massiv.push(random);
}
document.getElementById("out").append("AAA");
