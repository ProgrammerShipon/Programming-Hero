// Strongly  typed Language
// int a = 5
// string b = 'alim halim khalim';
// bool c = true
// obj student = { name: 'noya dhaman', id: 55 }
// int[] numbers = [ 12, 45, 78 ]
// string[] friends = ['abul', 'babul']

// javascript is a dynamic type Language
// primitive type
const a = 5;
const b = "Samsu Kopai na ekhun ar";
const d = true;

// non-primitive
const ages = [34, 23, 54];
const student = { id: 43, class: 2 };

console.log(typeof a, typeof b, typeof d, typeof ages, typeof student);

let x = 5;
let y = x;

console.log(x, y);
y = 7;
console.log(x, y);

let p = { job: "ewb developer" };
let q = p;
q = { job: "Backend" };
