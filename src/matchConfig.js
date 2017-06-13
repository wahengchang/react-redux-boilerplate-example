
import HelloWorld from './containers/HelloWorld'
import PreloadHelloWorld from './containers/PreloadHelloWorld'
import JsonAPI from './containers/JsonAPI'
import TopicList from './containers/TopicList'

const matchConfig = [
  {
    path: '/api',
    component: JsonAPI,
    initState: JsonAPI.initState
  },
  {
    path: '/preload',
    component: PreloadHelloWorld,
    initState: PreloadHelloWorld.initState
  },
  {
    path: '/topics',
    component: TopicList,
    initState: TopicList.initState,
  },
  {
    path: '/',
    component: HelloWorld,
    initState: HelloWorld.initState,
    exact: false
  }
]

export default matchConfig
