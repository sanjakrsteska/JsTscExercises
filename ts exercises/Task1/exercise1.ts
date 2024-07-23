function reverseArray<T>(param: T[]): T[] {
   return param.reverse()
}

const reversed1 = reverseArray(["Hello", "World", "!"]);
console.log(reversed1);

const reversed2 = reverseArray([1,2,3,4,5]);
console.log(reversed2);

const reversed3 = reverseArray([{name:'Sanja',age:23},{name:'Kristina',age:18}])
console.log(reversed3);