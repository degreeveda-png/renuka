import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Header from './Components/Header.jsx'
import Nav from './Components/Nav.jsx'
import Section from './Components/Section.jsx'

import Footer from './Components/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Header />
    <Nav />
    <Section />

    <Footer />
  </StrictMode>,
)
