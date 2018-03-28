import ApolloClient, { createNetworkInterface } from 'apollo-client'
import log from '../log'
const networkInterface = createNetworkInterface({
  uri: 'http://kapmug-server.mybluemix.net/graphql'
  //  uri: 'http://localhost:3030/graphql'
})

// Sample error handling middleware
networkInterface.useAfter([{
  applyAfterware({ response }, next) {
    if (response.errors) {
      // if (typeof window !== '÷undefined') {
        log.error(JSON.stringify(response.errors))
        alert(`There was an error in your GraphQL request: ${response.errors[0].message}`)
      // }
    }
    next()
  }
}])

const ApolloClientSingleton = new ApolloClient({
  networkInterface,
  shouldBatch: true,
  dataIdFromObject: obj => obj.id
})

export default ApolloClientSingleton
