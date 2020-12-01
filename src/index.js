import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import { rootReducer } from './redusers/rootReducer'

const store = createStore( rootReducer, applyMiddleware(thunk) )

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
