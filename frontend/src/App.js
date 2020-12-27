import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeView from './views/HomeView.js'
import ProductView from './views/ProductView.js'
import CartView from './views/CartView.js'
import LoginView from './views/LoginView.js'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginView} />
          <Route path='/product/:id' component={ProductView} />
          <Route path='/cart/:id?' component={CartView} />
          <Route path='/' component={HomeView} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
