import { ApolloClient, InMemoryCache } from "@apollo/client";

import { onError } from 'apollo-link-error'



const Client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
    onError: ({ graphQLErrors, networkError, operation, forward }) => {
      if (graphQLErrors) {
        for (let err of graphQLErrors) {
          console;log( "error loading...")
          console.log( err )
        }
      }
        if (networkError) {
          console.log(`[Network error]: ${networkError}`);
        }
      },
      
});

export default Client;