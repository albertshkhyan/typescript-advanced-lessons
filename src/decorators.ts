/** DECORATORS */

/** 
 * decorators -  are a design pattern, 
    * here we are using decorators as syntactic sugars
    * ⚠ in angular use decorators (the whole angular is built on decorators)
    * we add certain metadata for the class, which will later be recognized as a regular component

    How work decorators in typescript ? 

    There are 4 types of decorators that we can add to various properties, that is, mostly decorators, they work with classes and decorators themselves are ordinary functions.
        1.Decorators for class
        2.Decorators for property
        3.Decorators for method
        4.Decorators for getter/setter

*/

//# Decorators are simple functions

// function Log() {} //now we created our first decorator
// //* then we have class Component
// //# in order to hang (повесить, կախել) a decorator on a given component, we use the log decorator syntax
// @Log //now we get error typescript not understand current syntax, we must enable this experimental feature in tsconfig.json
// class Component {}

/**
 * Found 2 errors. Watching for file changes withour experimental feature in tsconfig.json
 * Disable decorators - Found 2 errors.
 *          1  'Log' accepts too few arguments to be used as a decorator here. Did you mean to call it first and write '@Log()'?
 *          2   Experimental support for decorators is a feature that is subject to change in a future release. Set the         'experimentalDecorators' option in your 'tsconfig' or 'jsconfig' to remove this warning.
 * -------------------------------------------
 * Enable decorators -  Found 1 errors. -
 *          1  'Log' accepts too few arguments to be used as a decorator here. Did you mean to call it first and write '@Log()'?
 *          ⚠ This error say we must take certian parameters in our @Log decorator
 *              @Log - when we use decorator like this, we in our Log function take only one parameter (constructor)
 */

//******************************************************************************* */

//constructor type is function
// function Log(x: Function) {//not important specify constructor word as parameter
function DecForClass(constructor: Function) {
	//not important specify constructor word as parameter
	console.log('%c # Decorator on class - START', 'background: blue; color: whtie');

	console.log('Log constructor - ', constructor); //*class Component {}
	console.log('%c # Decorator on class - END', 'background: blue; color: white');
}
// @Log //in here @Log decorator call our Log function and give here first meeted class as argument
//⚠ When we comment our class give error - Declaration expected.
// class Component {}
// @Log
// class Component2 {}

// function Component() {};//⚠ with function not work decorators

//# WE CAN ADD DECORATORS NOT ONLY ON CLASSES, WE CAN ADD ON PROPERTY OF CLASS

function DecForProp(target: any, propName: string | Symbol /**descriptor: PropertyDescriptor */) {
	// console.log('DecForProp descriptor (have descriptor prop decorator)- ', descriptor);//🚫 no have - undefined
	console.log('%c # Decorator on property of class - START', 'background: red; color: #bada55');
	//first parameter always consrtuctor, but in here contructor located in object
	console.log('DecForProp target - ', target); //{constructor: class Component2}
	console.log('DecForProp propName - ', propName); //name
	console.log('%c # Decorator on property of class - END', 'background: red; color: #bada55');
}

function DecForMethod(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
	console.log('%c # Decorator on method of class - START', 'background: yellow; color: black');

	console.log('DecForMethod descriptor - ', descriptor);
	console.log('DecForMethod propName - ', propName);
	console.log('DecForMethod target - ', target);
	//
	/**
     * when we add descriptor on method we also get additonala parameter which name is descriptor which type is PropertyDescriptor
            * 👌Дескриптор – объект, который описывает поведение свойства. (A descriptor is an object that describes the behavior of a property.)
            * Дескриптор данных свойства - это объект, присвоенный свойству объекта.

            Descriptor object have basic fields like`
                * value
                * writeable
                * enumarable
                * configurable
                * 🚫 not have get and set - it will have decorator for getter or setter


     */
	console.log('%c # Decorator on method of class - END', 'background: yellow; color: black');
}

function DecForGetter(target: any, name: string, descriptor: PropertyDescriptor) {
	console.log('%c # Decorator on getter of class - START', 'background: #32D870; color: black');

	console.log('DecForGetter descriptor - ', descriptor);
	/**Output
	 * Decorator for getter of setter have additional field get/set camparesion decorator of method.
		* 	 Decorator for method not have get and set fields.
         *  configurable: true
            enumerable: false
            get: ƒ getComponentName()
            set: undefined
     */
	console.log('DecForGetter name - ', name);
	console.log('DecForGetter target - ', target);

	console.log('%c # Decorator on getter of class - END', 'background: #32D870; color: black');
}

@DecForClass //this decorator called when class is initialized
class Component2 {
	@DecForProp
	name: string;

	@DecForGetter
	get getComponentName() {
		return this.name;
	}

	constructor(name: string) {
		this.name = name;
	}

	@DecForMethod
	logName(): void {
		console.log('Component2 logName - ', this.name);
	}
}

//**************** SIMULATE WORK OF ANGULAR - NOTE: INTERSTING EXAMPLE OF DECORATORS ***************/
//create decorator which name is Component
//# ☝⚠  We can call decorator directly -  for call our decorator we just add brackets () - for arguments this decorator we can use interface
/**We can call decorator and give argument as object, but we must do typeing for that object, we can use for this interface. */

interface IDecComponent {
	selector: string;
	template: string;
}

function DecComponent(config: IDecComponent) {
	//in angular in decorators wgite can add any option (object, string and etc)
	//How add any option in - just return new function (useing closure)
	return function (constructor: Function) {
		// ⚠ This function will be our decorator, first function will get config (data) for this decorator
	};
}

@DecComponent({
	selector: '#card', //when we will tranfer this data we will create like template in DOM three <div id="card"></div>
	template: `
        <div class="row">
            <div class="col s12 m6">
				<div class="card blue-grey darken-1">
					<div class="card-content white-text">
					<span class="card-title">Card Title</span>
					<p>I am a very simple card. I am good at containing small bits of information.
					I am convenient because I require little markup to use effectively.</p>
					</div>
					<div class="card-action">
					<a href="#">This is a link</a>
					<a href="#">This is a link</a>
					</div>
				</div>
            </div>
        </div>
    `,
})
class CardComponent {
	constructor(public name: string) {} //ts automaticly add this.name in constructor

	logName(): void {
		console.log('Component2 logName - ', this.name);
	}
}
