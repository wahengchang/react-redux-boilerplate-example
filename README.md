# react-redux-boilerplate-example

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


## Page
 - / (20topics, sorted by upvotes, descending)
 - /:id
 - /create

#### Remark
 - Title: Digg / Reddit clone with upvote and downvotes
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
[https://github.com/wahengchang/react-redux-boilerplate](https://github.com/wahengchang/react-redux-boilerplate)