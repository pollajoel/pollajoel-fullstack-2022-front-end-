import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

function CreateClient({ component}){
return new ApolloClient(
    { 
        uri: "http://localhost:4000/graphql",
        request: operation =>{
            operation.setContext({ 
                fetchOptions:{
                    credentials: 'include'
                },
                component
            });
        },
    });
}

export default withApollo(CreateClient)