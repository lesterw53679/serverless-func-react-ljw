npm install

this will build the initial project

with react 17 no more import react from react

//this command will spin up the server
npm start

//ok here is another thing
//react and netlify smart enough to know about ports.
//so to spin up the server call:

npm run netlify

// and now we have a server on 8888



ran into problem:

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './lib/tokenize' is not defined by "export
s" ....

solution:
https://stackoverflow.com/questions/72514241/package-subpath-lib-tokenize-is-not-defined-by-exports

npm update

//problem:

Error: error:0308010C:digital envelope routines::unsupported


https://stackoverflow.com/questions/74283123/error03000086digital-envelope-routinesinitialization-error-on-vue-js-project

  "start": "react-scripts --openssl-legacy-provider start",
    "build": "react-scripts --openssl-legacy-provider build",


