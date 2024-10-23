import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import Moneymanager from './redux/Moneymanager'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Moneymanager/>
      </Provider>
    </div>
  )
}
