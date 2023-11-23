import { persistor, store } from '@src/redux'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="flex items-center justify-center h-screen w-screen">
          <h1 className="text-3xl">Grocery List App</h1>
        </div>
      </PersistGate>
    </Provider>
  )
}

export default App
