import '../styles/globals.scss'
import Client from '../apollo-client';
import { ApolloProvider } from "@apollo/client";
function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return(getLayout(
    <ApolloProvider client={Client}>
        <Component {...pageProps} />
    </ApolloProvider>
  
  ) )
 


}

export default MyApp
