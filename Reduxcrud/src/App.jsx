import React from 'react'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import RdxCrud from './Redux/RdxCrud'

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <RdxCrud/>
      </Provider>
    </div>
  )
}
