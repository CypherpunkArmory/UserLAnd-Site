import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/redux/store'

const store = createStore()

export default ({ element }) => <Provider store={store}>{element}</Provider>
