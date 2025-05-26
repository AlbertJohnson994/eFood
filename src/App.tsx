// import { BrowserRouter } from 'react-router-dom'
// import Header from './components/Header'
// import { GlobalCss } from './styles'
// import Rotas from './routes'
// import Footer from './components/Footer'
// import Banner from './components/Banner'

// const App: React.FC = () => {
//   return (
//     <BrowserRouter>
//       <GlobalCss />
//       <div className="app-container">
//         <Header />
//         <main>
//           <Rotas />
//         </main>
//         <Footer />
//       </div>
//     </BrowserRouter>
//   )
// }

// export default App

import { BrowserRouter, useLocation } from 'react-router-dom'
import React from 'react'
import { GlobalCss } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Rotas from './routes'

const AppContent: React.FC = () => {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const isPerfil = location.pathname === '/perfil'

  return (
    <>
      <GlobalCss />
      {/* Only show Header on home page */}
      {isHome && <Header />}

      {/* Only show Banner on perfil page */}
      {isPerfil && <Banner />}

      <main>
        <Rotas />
      </main>

      <Footer />
    </>
  )
}

const App: React.FC = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
)

export default App
