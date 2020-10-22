# Use type Script or not ?
    -Soundness and Completeness system 
        ![alt text](http://url/to/img.png)
            soundness - doesnot reject correct programs
                sound type system
                    a program, during type checking, will not be "approved" if that program has type errors.
                    Кроме того, надо понимать, что надёжная система типов не пропустит неправильную программу
                    
* Soundness система гарантирует что там  где есть ошибка код не скомпилируется но может не пропустить и правильную программу

* Completeness system гарантирует что если ты напислал код правильно то ваш код точно скомпилируется 






# Продвинутый TypeScript. Декораторы, Компилятор, Generic Types, Namespaces

/*
customization(настройка) typescript - set config - how can we config typescript
more lib which allow you work with typescript more better

1. init project 
    create package.json
3. yarn add -D typescript 
    we must add typescript in our project as dev dependencies
    ⚠ Also we need install typescript global for can use it in console (some cammands, tsc)
        gloabal version must match in local version of typescript
            check it -->  tsc -v

4. Setup typescript compiler -  we can control tsc with special file tsconfig.json
    For control tsc we add
    tsc --init
        we will have key "compilerOptions"
    We can specify which files must exclude compile
        When we run tsc , this command compole all files
            "exclude": [] - by default in exclude we have node_modules
            "exclude: [
                "./module.ts"
            ]

        include key in tsconfig say which files we must include for compilation
            Example 
                "include": {
                    "src/**/*
                }

Output js we will store in dist folder? 
    in order to tell the typescript compiler that we need to move and separate java script at typescript
    для того чтобы указать компилятору typescript что нам необходимо перемещать и отделять java script at typescript
        We will switch in tsconfig.json
            "outDir": "./dist"

            also we can say that root directory is src
                "rootDir": "./src"

    
    How compile automaticly
        tsc --watch --> typescript compiler will will follow the change, and will compile automaticly

    Target in tsconfig.json 
        the modern browsern early support es6 syntax for this we cans set 
            "target": "ES6"

    If we try in app.ts write 
        document. <--- Error: typescript not understand what is document - document is browser api
    We can say what lib  must understand typescript
        We can swithc DOM lib, DOM.iterable, ScriptHost
            "lib": ["DOM","ES6","DOM.Iterable","ScriptHost"],,--> for target ES6 these libs automaticly added,--> for target ES6 these libs automaticly added

            ⚠ current version understand document, but for example use proxy we must add it in lib


            "allowJs" and "checkJs" keys in tsconfig.json 
                 if you want to use some features from typescript
                    --checkJs на самом деле просто означают сообщения об ошибках в .jsфайлах, уже включенных в проект. Флаг необходим, поскольку поведение по умолчанию для файлов .js заключается в том, что они не сообщают об ошибках, и мы не хотели вносить критические изменения при добавлении этой функции.

            if we develop using JSX
                We must switch this key
                    "jsx": "react",
            https://github.com/microsoft/TypeScript-React-Starter/blob/master/tsconfig.json


            "sourceMap" - for can debuger ts files, durring debug browser can show ts file not compiled js
                "sourceMap": true - this command generate app.js.map file

            
            "noEmitOnError": false - by default false, when we have error typescript create(generate) file, we can say that if we have error not create file in dist(output folder)








            *************** STRICT TYPE CHECKING OPTION ***************
            "strictEmplicitAny": true - if flase not show errors. Exmaple when we not specify type of function paramter





            *************** ADDITIONAL CHECKS ***************
           "noUnusedLocals": true -  When we write variable which we not use typescript give error, we can switch off it , jsut set value false - this is like eslint for ts



*/