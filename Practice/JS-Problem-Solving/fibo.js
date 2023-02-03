// const fibo = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]

/**
 *  fibo[3] = fibo[2] + fibo[1]
 *  fibo[4] = fibo[3] + fibo[3]
 *  fibo[4] = fibo[3] + fibo[2]
 *  fibo[5] = fibo[4] + fibo[3]
 *  fibo[50] = fibo[59] + fibo[58]
 *  fibo[987] = fibo[986] + fibo[985]
 *  fibo[n] = fibo[n-1] + fibo[n-2]
 *  fibo[i] = fibo[i-1] + fibo[i-2]
 */

const fibo = [0, 1];
console.log(fibo)
for (let i = 2; i <= 25; i++) {
  fibo.push(fibo[i - 1] + fibo[i - 2]);
}
console.log(fibo)
