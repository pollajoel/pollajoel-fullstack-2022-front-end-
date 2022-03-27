import '../styles/globals.scss'
import Client from '../apollo-client';
import { ApolloProvider } from "@apollo/client";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return(
  <ApolloProvider client={Client}>
  { getLayout(<Component {...pageProps} />)}
</ApolloProvider>
    
    
    )
 


}

export default MyApp
