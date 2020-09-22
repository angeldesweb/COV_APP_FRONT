import React from 'react';
import { render } from 'react-dom';
import client from './apollo'
import 'semantic-ui-css/semantic.min.css'
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './routes';


function App() {
    return (
      <ApolloProvider client={client}><div><Routes/></div></ApolloProvider>
    );
  }
  

render(<App/>, document.getElementById('root'));