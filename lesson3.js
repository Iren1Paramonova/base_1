/* let i = 0;
for (i = 0; i < 3; i += 1) {
  console.log(i);
}
console.log(i); */

for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) continue; // если true, пропустить оставшуюся часть тела цикла
  console.log(i); // 1, затем 3, 5, 7, 9
}
