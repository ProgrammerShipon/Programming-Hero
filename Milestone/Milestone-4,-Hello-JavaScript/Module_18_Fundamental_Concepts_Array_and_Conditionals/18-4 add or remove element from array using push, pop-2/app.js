
// use push to add element to an array as the last element array
var numbers = [34, 455, 56, 4, 56, 67]
console.log(numbers)
numbers.push(63)
console.log(numbers)

var friends = ['balam', 'kalam', 'salam']
console.log(friends)
friends.push('gelam', 'pailam')
console.log(friends)


// use pop to get last element
console.log('Original numbers : ' + numbers)
numbers.pop()
console.log(numbers)
var element = numbers.pop();
console.log('element : ' + element)
console.log(numbers)

// first element remove 
var numbers = [344, 45, 565, 456, 677, 78];
console.log('original array : ' + numbers);
numbers.shift()
console.log(numbers)

// push first element
var numbers = [344, 45, 565, 456, 677, 78];
console.log("original array numbers : " + numbers);
numbers[0] = (10);
console.log(numbers)