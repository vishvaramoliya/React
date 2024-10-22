import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import Reduxapi from './redux/Reduxapi'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Reduxapi/>
      </Provider>
    </div>
  )
}
