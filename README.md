# react-redux-boilerplate-example
It is a example of demonstrating how isomorphic web application works under [facebook-react-redux-application-standard](https://facebook.github.io/react/) architect. 

As the graph showed below, container components takes the role of centralize the mechanism of isomorphic shared componetns, wiring up :
 - react(router, containers, componets, props and server-client-rendering)
 - redux(dispather, middlewares, store and actinos)


![react-redux-universial-container-compont](https://user-images.githubusercontent.com/5538753/27771266-2af87dde-5f7e-11e7-9c7c-ec92b57643aa.jpg)

## Download the project
```
$ git clone https://github.com/wahengchang/react-redux-boilerplate-example
$ npm install
```

## Run (Develop Mode)
It is runnign in Development mode, enable HMR
 - http://localhost:3000/topics

```
$ npm run dev
open http://localhost:3000/

```

## Run (Production Mode)
 - Compiling react/redux script to browser use lib, with webpack default optimized config.
 - Disable unnecessary funtionality which helps to debug in development mode
```
$ npm run build
$ npm run start

```

## Test

```
$ npm run test


Test Suites: 4 passed, 4 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        1.824s, estimated 2s

```
or watch mode
```
$ ./node_modules/jest/bin/jest.js --watchAll #runs all tests
```

 
#### Remark
 - post not exceed 255 characters

#### Data Structure
 ```js
[{
  id: 1,
  content: 'not exceed 255 characters',
  vote: 99
}]
 ```

## Reference
 - [https://github.com/wahengchang/react-redux-boilerplate](https://github.com/wahengchang/react-redux-boilerplate)
 - [https://medium.com/@peterchang_82818/react-redux-isomorphic-boilerplate-best-practice-example-tutorial-learning-rendering-reducer-action-8a448d0dbddb](https://medium.com/@peterchang_82818/react-redux-isomorphic-boilerplate-best-practice-example-tutorial-learning-rendering-reducer-action-8a448d0dbddb)
