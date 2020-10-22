"use strict";
/*************************************************************** */
// let prx = new Proxy()
// let b1 = document.querySelector(".btn");
//Object is possibly 'null' --> b1 variable can be null typescript say it
//# Error
// b1.addEventListener("click", () => {
// 	console.log('Button has been clicked!');
// });
//# Fix problem 1
/**
 * когда вы добавляете восклицательный знак после имени переменной / свойства, вы сообщаете TypeScript, что уверены, что значение не равно null или undefined.

 */
// let b1 = document.querySelector(".btn")!;// you are sure the value is not null or undefined.
// b1.addEventListener('click', () => {
// 	console.log('Button has been clicked!');
// });
//# Fix problem 2
// let b1 = document.querySelector('.btn');
// console.log('b1', b1);
// b1?.addEventListener('click', () => {//optional
// 	console.log('Button has been clicked!');
// });
/**++++++++++++++ noImplicitReturns:true ++++++++++++++*/
//noImplicitReturns:false - no give error when nothing return in function
// function multiple(a:number, b:number): number {//❌error must return somthing
//     if(!a && !b) {
//         return a * b;
//     }
// }
// multiple(2,5)
// function multiple(a: number, b: number) {//✅
// 	//error must return somthing
// 	if (!a && !b) {
// 		return a * b;
//     }
//     return;
// }
// multiple(2, 5);
// console.log("hello im typscript");
/**++++++++++++++ Experimental option - DECORATORS ++++++++++++++*/
