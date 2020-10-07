
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
let b1 = document.querySelector('.btn');
b1?.addEventListener('click', () => {//optional
	console.log('Button has been clicked!');
});
