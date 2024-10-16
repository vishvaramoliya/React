import React from 'react'
import { Provider } from 'react-redux'
import Crud from './Redux/Crud'
import { store } from './App/Store'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Crud/>
      </Provider>
    </div>
  )
}
