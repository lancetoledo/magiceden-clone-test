import AppContainer from './AppContainer'
import { MagicEdenProvider } from './context/context'

const App = () => {
  return (
    <MagicEdenProvider>
      <AppContainer />
    </MagicEdenProvider>
  )
}

export default App
