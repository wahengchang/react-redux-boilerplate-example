
import TopicList from './containers/TopicList'

const matchConfig = [
  {
    path: '/',
    component: TopicList,
    initState: TopicList.initState,
    exact: false
  }
]

export default matchConfig
