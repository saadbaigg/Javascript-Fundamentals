// Along with getter methods, we can also create setter methods which reassign 
// values of existing properties within an object. Let’s see an example of a setter method:

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
// Notice that in the example above:
// We can perform a check for what value is being assigned to this._age.
// When we use the setter method, only values that are numbers will reassign this._age
// There are different outputs depending on what values are used to reassign this._age.
// Then to use the setter method:
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
// Setter methods like age do not need to be called with a set of parentheses.
// Syntactically, it looks like we’re reassigning the value of a property.
// Like getter methods, there are similar advantages to using setter methods that
// include checking input, performing actions on properties, and displaying a
// clear intention for how the object is supposed to be used.