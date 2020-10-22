import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloProvider } from '@apollo/react-hooks'
import ApoloClient from 'apollo-boost'
import { Provider } from 'react-redux'
import { store } from './store/store'

const client = new ApoloClient({
  uri: `http://localhost:3001/graphql?`,
})
ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root')
)
