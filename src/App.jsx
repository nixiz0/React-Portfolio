import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Xp from './components/experience/Xp'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'


const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Xp />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </>
  )
}

export default App