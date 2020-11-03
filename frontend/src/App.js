import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import HomeView from './views/HomeView.js'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className='py-3'>
        <Container>
          <HomeView />
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default App
