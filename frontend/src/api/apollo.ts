import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', 
  cache: new InMemoryCache({
    
  }),
  // headers: {
  //   Authorization: `Bearer YOUR_LOCAL_SERVER_ACCESS_TOKEN`, 
  // },
});

export default client;