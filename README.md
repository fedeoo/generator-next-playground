# generator-next-playground

next generation playground generator

## Installation

install node.js
install yeoman using `npm install yo -g`
install the generator `npm install generator-next-playground -g`

## Usage

Run command in a new folder `yo next-playground`

And then, you will get a project same with [next-playground](https://github.com/fedeoo/playground)

```sh
>_ tree -I node_modules -L 3
├── README.md
├── dist // server base directory
├── gulp
├── gulpfile.babel.js
├── package.json
└── src
    ├── IntersectionObserver
    │   ├── index.html
    │   └── main.js // entry point of js
    ├── alg
    │   └── merge-base
    └── three
        ├── drinkbird
        └── hello
```

gulp will watch all files except javascript files and copy to server directory.

webpack will care your main.js and bundle to dist directory, but if you add a new main.js, you have to restart the gulp task.
