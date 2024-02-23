let a = [10, 24, 56, 72, -10, -88, 100, 564];
let b = a.filter((v, i) => {
  if (i % 2 == 0) {
    return v;
  }
});
let sum = 0;
for (i of b) {
  sum += i;
}
console.log(sum / b.length);
