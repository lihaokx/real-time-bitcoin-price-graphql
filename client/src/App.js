 
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql
} from "@apollo/client";
import Prices from './component/Prices'
import { FaBitcoin } from 'react-icons/fa';

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });

  client
  .query({
    query: gql`
      query {
        prices  {
          sell
          symbol
        }
      }
    `
  })
  .then(result => console.log(result));
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <FaBitcoin  color="gold" fontSize="4em"/> 
          <h1>Real-time Price of Bitcoin:</h1>
          <Prices/>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
