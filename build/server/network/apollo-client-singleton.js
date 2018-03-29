import ApolloClient, { createNetworkInterface } from 'apollo-client';
import log from '../log';
var networkInterface = createNetworkInterface({
  uri: 'http://kapmug-server.mybluemix.net/graphql'
  //  uri: 'http://localhost:3030/graphql'
});

// Sample error handling middleware
networkInterface.useAfter([{
  applyAfterware: function applyAfterware(_ref, next) {
    var response = _ref.response;

    if (response.errors) {
      // if (typeof window !== '÷undefined') {
      log.error(JSON.stringify(response.errors));
      alert('There was an error in your GraphQL request: ' + response.errors[0].message);
      // }
    }
    next();
  }
}]);

var ApolloClientSingleton = new ApolloClient({
  networkInterface: networkInterface,
  shouldBatch: true,
  dataIdFromObject: function dataIdFromObject(obj) {
    return obj.id;
  }
});

export default ApolloClientSingleton;
//# sourceMappingURL=apollo-client-singleton.js.map