import ApolloClient from 'apollo-boost'

const client = new ApolloClient({
  uri:'http://localhost:3001/graphql',
  request: (operation) => {
    const token = localStorage.getItem('token')
    operation.setContext({
      headers: {
        'x-token': token ? `Bearer ${token}` : null
        
      }
    })
  }
})

export default client;



