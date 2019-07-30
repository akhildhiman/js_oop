console.log(this.document === document); // true


console.log(this === window); // true

var myFunction = function() {
  console.log(this);
};
myFunction(); // window

function f1() {
  "use strict";
  return this;
}
console.log(f1() === window); // Undefined

function foo() {
  console.log("Simple function call");
  console.log(this === window);
}

foo(); //Output ?? Simple Function Call
console.log(this === window)(
  // true

  // This for IIFE
  function() {
    console.log("Anonymous function invocation");
    console.log(this === window);
  }
)(); // SyntaxError

// This for IIFE in strict mode
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

foo(); // Simple Function Call; window;


var myObject = {};
myObject.someMethod = function() {
  console.log(this);
};
myObject.someMethod(); //Value Of This

// This refers to the New Instance

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Paul Adamsn

//This refers to the invoker Object
function foo() {
  "use strict";
  console.log("Simple function call");
  console.log(this === window);
}

let user = {
  count: 10,
  foo: foo,
  foo1: function() {
    console.log(this === window);
  }
};

user.foo(); // Simple Funtion Call; False
let fun1 = user.foo1;
fun1(); // true
user.foo1(); // false

//this will call apply and bind

this.x = 9;
var module = {
  x: 81,
  getX: function() {
    return this.x;
  }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX(); // 9

var boundGetX = retrieveX.bind(module);
boundGetX(); // 81

// Call with new constructor

function Person(fn, ln) {
  this.first_name = fn;
  this.last_name = ln;

  this.displayName = function() {
    console.log(`Name: ${this.first_name} ${this.last_name}`);
  };
}

let person = new Person("John", "Reed");
person.displayName(); // John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName(); // Paul Adams

person.displayName.call(person2); // Paul Adams

// Guess the output of the following

const a = {
  a: "a"
};
const obj = {
  getThis: () => this,
  getThis2() {
    return this;
  }
};
obj.getThis3 = obj.getThis.bind(obj);
obj.getThis4 = obj.getThis2.bind(obj);

// Output
obj.getThis();

// Output
obj.getThis.call(a);

// Output
obj.getThis2();

// Output
obj.getThis2.call(a);

// Output
obj.getThis3();

// Output
obj.getThis3.call(a);

// Output
obj.getThis4();

// Output
obj.getThis4.call(a);
