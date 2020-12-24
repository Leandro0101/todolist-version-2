import React from 'react'
import { Router } from 'react-router-dom'

import Routes from './routes'
import history from './history'
import { AuthProvider } from './Context/AuthContext'
import Header from './components/header/header'

function App() {

  return (
    <AuthProvider>
      <Header />
      <Router history={history}>
        <Routes />
      </Router>

    </AuthProvider>

  )
}

export default App
