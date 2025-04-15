import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Rotas from './routes'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="app-container">
        <Header />
        <main>
          <Rotas />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
