/**
 * Truthy:
 * 1. true
 * 2. any number (+ve, -ve) will be truthy other than 0
 * 3. any string other than empty string
 * 4. '0', 'false'
 * 5, {}, []
 * 6. {a: 5, b:43}, [a,d,g]
 *
 * Falsy:
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. undefined
 * 5. null
 */
const x = -2;
if (x) {
  console.log("value of x is truthy - ", x);
} else {
  console.log("value of x is falsy - ", x);
}

// optional
// check faslsy
const y = null;
if (!y) {
  console.log("value is falsy - ", y);
}

const z = " ";
// check true
if (!!x) {
  console.log("value is truthy - ", x);
}
