// What is a function in  JavaScript?

function myFunction() {
    return 1;
}


// Anon functiono
let myFunc = function () {
    return 1;
}

// Arrow Function directly
let myFuncArrow = () => a + 1
console.log(myFuncArrow(110))

// Arrow Function in block
let myFuncArrow2 = () => ({ a: 5})
console.log(myFuncArrow2())

function myHigherOrderFunction(parameterFunction){
    return parameterFunction()
}
console.log(myHigherOrderFunction(myFuncArrow2))

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

 let arrays = [[1,2,3],[4,5],[6]];
// Your code here
 // -> [1,2,3,4,5,6]

export function flattening(inputList) {
    return inputList
}
console.log(flattening(arrays))