This project contains multiple simple TypeScript examples.

Each example uses a simple HTML file referencing a JavaScript file
and requires that an IDE (WebStorm) is automatically compiling
the TypeScript into JavaScript.

There is package.json to install a project local TypeScript compiler.

The HTML uses SystemJS so we can load the TypeScript as modules.

If a TypeScript file has no import or export then it assumed global
and we'd get lots of duplicate identifier errors from the TypeScript
compiler when compiling the porject.