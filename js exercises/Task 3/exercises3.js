class Person  {
    constructor(firstName,lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName
    }
}
function objectManipulator(obj,array) {

    const {firstName,lastName} = obj
    const combination = {
        ...obj,
        ...array,
        firstName,
        lastName
    }
    console.log("Destructuring of the object",firstName,lastName)
    console.log("Using spread operator to combine object and array",combination)
}

objectManipulator(new Person("Sanja","Krsteska"),[1,2,3,4])
