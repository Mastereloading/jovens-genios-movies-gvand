import { createApp, h, provide } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createApolloProvider } from '@vue/apollo-option'
import { loadFonts } from './plugins/webfontloader'
import vuetify from './plugins/vuetify'
import router from './router'
import App from './App.vue'

const httpLink = createHttpLink({ uri: 'http://localhost:4000/' })
const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

loadFonts()

const app = createApp({
  setup () {
    provide(DefaultApolloClient, apolloClient)
  },
  render: () => h(App)
})
  .use(apolloProvider)
  .use(router)
  .use(vuetify)
  .mount('#app')
