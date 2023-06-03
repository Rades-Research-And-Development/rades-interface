import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const API_SUBGRAPH = new ApolloClient({
  uri: 'http://13.251.105.183:8000/subgraphs/name/athevinha/rades',
  cache: new InMemoryCache(),
});
export default API_SUBGRAPH