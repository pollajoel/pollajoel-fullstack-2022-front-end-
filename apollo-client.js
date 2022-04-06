import { ApolloClient, InMemoryCache} from "@apollo/client";




const Client = new ApolloClient({
    ssrMode: typeof window === 'undefined',
    //link: authLink.concat(Linkhttp),
    uri: 'https://schedulcalendar.herokuapp.com/graphql',
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