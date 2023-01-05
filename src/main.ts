import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import Coordinate from './components/Coordinate.vue'
export default Coordinate
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://gql.wums.link/graphql',
  // uri: 'http://localhost:30002/graphql',
})
const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})
createApp(App)
    .use(apolloProvider)
    .mount('#app')