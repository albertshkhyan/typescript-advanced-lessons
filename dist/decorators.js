"use strict";
/** DECORATORS */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function DecForClass(constructor) {
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
function DecForProp(target, propName /**descriptor: PropertyDescriptor */) {
    // console.log('DecForProp descriptor (have descriptor prop decorator)- ', descriptor);//🚫 no have - undefined
    console.log('%c # Decorator on property of class - START', 'background: red; color: #bada55');
    //first parameter always consrtuctor, but in here contructor located in object
    console.log('DecForProp target - ', target); //{constructor: class Component2}
    console.log('DecForProp propName - ', propName); //name
    console.log('%c # Decorator on property of class - END', 'background: red; color: #bada55');
}
function DecForMethod(target, propName, descriptor) {
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
function DecForGetter(target, name, descriptor) {
    console.log('%c # Decorator on getter of class - START', 'background: #32D870; color: black');
    console.log('DecForGetter descriptor - ', descriptor);
    /**Output
         *  configurable: true
            enumerable: false
            get: ƒ getComponentName()
            set: undefined
     */
    console.log('DecForGetter name - ', name);
    console.log('DecForGetter target - ', target);
    console.log('%c # Decorator on getter of class - END', 'background: #32D870; color: black');
}
let Component2 = class Component2 {
    constructor(name) {
        this.name = name;
    }
    get getComponentName() {
        return this.name;
    }
    logName() {
        console.log('Component2 logName - ', this.name);
    }
};
__decorate([
    DecForProp
], Component2.prototype, "name", void 0);
__decorate([
    DecForGetter
], Component2.prototype, "getComponentName", null);
__decorate([
    DecForMethod
], Component2.prototype, "logName", null);
Component2 = __decorate([
    DecForClass //this decorator called when class is initialized
], Component2);
function DecComponent(config) {
    //in angular in decorators we can add any option (object, string and etc)
    //How add any option in - just return new function (useing closure)
    return function (constructor) {
        // ⚠ This function will be our decorator, first function will get config (data) for this decorator
    };
}
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    } //ts automaticly add this.name in constructor
    logName() {
        console.log('Component2 logName - ', this.name);
    }
};
CardComponent = __decorate([
    DecComponent({
        selector: '#card',
        template: `

    `,
    })
], CardComponent);
