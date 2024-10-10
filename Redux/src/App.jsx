import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import ReduxCounter from './Redux/ReduxCounter'

export default function App() {
  return (
    <div>
      <Provider store={store} >
        <ReduxCounter/>
      </Provider>
    </div>
  )
}
