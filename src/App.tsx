import { ApolloProvider } from '@apollo/client'
import { Router } from './components/Router'
import { client } from './lib/apollo'

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </div>
  )
}

export default App
