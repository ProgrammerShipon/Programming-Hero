
var numbers = [34, 67, 545, 456, 56, 76];

// 1. get element by index
console.log(numbers);
console.log(numbers[0])

var element = numbers[1]
console.log(element)

// 2. set element value by array index
numbers[3] = 34;
console.log(numbers[3])
console.log(numbers)


// 3. find index of an element
var positionIndex = numbers.indexOf(56);
console.log(positionIndex)

var colors = ['red', 'white', 'black', 'blue', 'gray']
console.log('indexof : ' + colors.indexOf('black'))
