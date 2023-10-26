import React from 'react';
import ReactDOM from 'react-dom/client';
import Students from './components/Students';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

// Client Object to be passed in ApolloProvider
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ApolloProvider client={client}>
    <Students />
  </ApolloProvider>
  </React.StrictMode>
);
