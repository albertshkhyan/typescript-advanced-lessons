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


*/