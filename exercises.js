// // What is a function in  JavaScript?

// function myFunction() {
//     return 1;
// }


// // Anon functiono
// let myFunc = function () {
//     return 1;
// }

// // Arrow Function directly
// let myFuncArrow = () => a + 1
// console.log(myFuncArrow(110))

// // Arrow Function in block
// let myFuncArrow2 = () => ({ a: 5})
// console.log(myFuncArrow2())

// function myHigherOrderFunction(parameterFunction){
//     return parameterFunction()
// }
// console.log(myHigherOrderFunction(myFuncArrow2))

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }
  
  repeat(3, console.log);

  // Use the reduce method
  let arrays = [[1,2,3], [4,5],[6]];
  // Your code here.
  // -> [1,2,3,4,5,6]`

export function flattening(inputList) {
    return inputList.reduce((ae1,ae2)=>ae1.concat(ae2))
}
console.log(flattening(arrays))

export function loop(value, test, update, body){
    while(test(value)){
    body(value)
    value = update(value)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);

export function everyLoop(array, test) 
{
  // Your code here.
  let returnValue = true
  for(let item of array){
    returnValue = returnValue && test(item)
  }
  return returnValue
}


console.log(everyLoop([1, 3, 5], n => n < 10));
// → true
console.log(everyLoop([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true

 export function everySome(array, test) 
{
// Your code here.
array.some(test)
} 
console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everySome([], n => n < 10));
// → true