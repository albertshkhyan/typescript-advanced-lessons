/**What is Generic ? */

const cars: string[] = ['Ford', 'Audi'];
//We can specify type of arrays another way with generic
/**
 * We can use global class Array
 */
const cars2: Array<string> = ['Ford', 'Audi']; //in type script we have special classes example Array we can this use as type. in this <> we specify which must containe our array

/*******************Simple example - Wher we can use generics no created custom generic *******************/

//# Fot that we can use promises

// const promise = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("Primise resolved!");
//     }, 2000);
// })
// promise.then(data => {//in this example data variable of then method have unkown type, because typescript not understand with who work promise (data variable can be number, string and etc nb)
//     console.log('data', data);
// })

/*# more better way -  Generic Promise implementation for TypeScript 
we can specifay that data variable is string
*/
// const promise = new Promise<string>((resolve) => {//syntax 1
const promise: Promise<string> = new Promise((resolve) => {
	//syntax 2
	setTimeout(() => {
		resolve('Primise resolved!');
	}, 2000);
});
promise.then((data) => {
	console.log('data', data); //that mean we can use autocomplet data.to**
});

/****************Now we will do more serious things than promise  ***************/

//# For example we have basic function in TypeScript

//* what the problem in here, not we now that merged have name key but autocomplete not will work in herre
function mergeObjects(a: object, b: object) {
	return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Alik' }, { sname: 'Shkhyan' }); //merged successfully, BUT...
// console.log('merged', merged);
//merged.name//❌😭Property 'name' does not exist on type '{} & object'.

/** What is this type '{} & object' 
 * This type take typescript from assign method (hover on assign method and you will see type)
 * Have 3 overloads (note: overload the potential function results and parameters which take that function)
    ⚠ object type just say it object not give info about fields
 *  IN THIS SITUATION COME HELP US GENERICS
        Because with typescript we can specify in last object we will have keys which can we work with autocomplete
 */

//# Fot fix this problem we transform out mergeObjects to generic
/**
 *
 * In tricangle brackets we give own types, by standart that type write with one letter in to uppercase <T>
 * <T> - custom type
 */
//  function mergeObjects2<T>(a: object, b: object) {//'T' is declared but its value is never read.
//  function mergeObjects2<T, B>(a: T, b: B) {//For work autocomplete
function mergeObjects2<T, B>(a: T, b: B) {
	//Also we can explicitly indicate which must return
	return Object.assign({}, a, b); //assign not can return : {} & T & B
}
const person = mergeObjects2({ name: 'Alik' }, { sname: 'Shkhyan' });
person.name;
//for second parameter we also we must specify own custom type
person.sname;

/**⚠👌 <T, B>  - this type are genercs, they adjust to incoming data */

//# why is it comfortable, because ... WITH GENERICS WE GET UNIVERSAL FUNCTIONS
const car = mergeObjects2({ model: 'Ford' }, { year: '2020' });
car.model;
car.year;

//# PROBLEM😨😨 OD WITH TOP EXAMPLE   - for log in index.html we must swithc dist/generic.js
function mergeObjects3<T, B>(a: T, b: B) {
	return Object.assign({}, a, b);
}
const merged3 = mergeObjects3('Alik', 'Shkhyan');
// console.log('merged3', merged3);
/**
 * a parameter ingnored, and show second parameter as object - NOT CORRECT
	* mergeObjects - with this function we work only with object, and we can specify restrictions, we can say that T generic must be object
 * Object
	0: "S"
	1: "h"
	2: "k"
	3: "h"
	4: "y"
	5: "a"
	6: "n"
 */
/**************** Generic Constraints ******************* */
/**Typescript allow  constraints parameters*/
//# We can say that T generic must be object

function mergeObjects4<T extends object, B extends object>(a: T, b: B) {
	return Object.assign({}, a, b);
}
//  const merged4 = mergeObjects4('Alik', 'Shkhyan');//now give error when we pass as argument not object
// console.log('merged4', merged4);
//============================================
//# NEXT EXAMPLE WHEN GENERICS IS GOOD

//Parameter 'value' implicitly has an 'any' type.
// function withCount(value) {//❌
// 	return {
// 		value,
// 		count: `In this object we have ${value.length} symbols.`, //in here we have potential error, because not all values can have length property
// 	};
// }
/*****************typescript + interface ****************/
//# In this example will help us generics - we can specify that we will work only that objects whcih have length property

//#in this example error by value fixed, but not fact that length will be
// function withCount2<T>(value: T): { value: T; count: string } {//❌
// 	return {
// 		value,
// 		count: `In this object we have ${value.length} symbols.`, //in here we have potential error, because not all values can have length property
// 	};
// }

//# using interface with generic
interface ILength {
	length: number;
}

function withCount2<T extends ILength>(value: T): { value: T; count: string } {
	return {
		value,
		count: `In this object we have ${value.length} symbols.`, //in here we have potential error, because not all values can have length property
	};
}

// console.log(withCount2('hello typescript'));
/**Output
	count: "In this object we have 16 symbols."
	value: "hello typescript"
 */
// console.log(withCount2(['im', 'is', 'array']));
/**Output
 * count: "In this object we have 3 symbols."
	value: Array(3)
	0: "im"
	1: "is"
	2: "array"
 */
// console.log(withCount2(20)); //❌ Argument of type 'number' is not assignable to parameter of type 'ILength'.
// console.log(withCount2({ length: 20 }));
//============================================

/**************************Util which also work with typescript (keyof) *************************/

//# Another example  when need generics
// function getObjectValue(obj: object, key: string) {
// 	return obj[key]; //Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'. - NOT ANY STRING CAN BE KEY OF OBJ VARIABLE.  EX: {`name`: "Valod"}❌
// }

// const somePerson = {
// 	name: 'Alik',
// 	age: 24,
// };
// console.log(getObjectValue(somePerson, 'name'));
// console.log(getObjectValue(somePerson, 'age'));
// console.log(getObjectValue(somePerson, 'job')); //not have this field

//# FIX TOP EXAMPLE
function getObjectValue2<T extends object, B extends keyof T>(obj: T, key: B) {
	return obj[key];
}

const somePerson2 = {
	name: 'Valod',
	age: 20,
	//job: "javascript"
};
console.log(getObjectValue2(somePerson2, 'name'));
console.log(getObjectValue2(somePerson2, 'age'));
// console.log(getObjectValue2(somePerson2, 'job')); //now we see only one error with this field, because we not have job field
/**
 * keyof - special operator which gets all the necessary keys from the given object
 */

//============================================

/*********************How  generics work with classes ********************/

// class Collection {
// 	private _item: any[];//_item array can have any elements

// 	add(item) {
// 		this._item.push(item)
// 	}
// 	remove(item) {
// 		this._item.filter(i => i !== item  )
// 	}
// 	get item() {
// 		return this._item
// 	}
// }

//# classes also can be generics - FIX THIS PROBLEM

// //????????????????
// class Collection2<T> {
// 	private _item: T[]; //_item array can have any elements

// 	// constructor(_item) {}

// 	add(item: T) {
// 		this._item.push(item);
// 	}
// 	remove(item: T) {
// 		this._item.filter((i) => i !== item);
// 	}
// 	get item(): T[] {
// 		//because in here we return we specify typeof return
// 		return this._item;
// 	}
// }
