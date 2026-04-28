//import { useState } from 'react'
//import { reactLogo, viteLogo, heroImg } from './assets/index.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import { Navbar } from './components/index.jsx'
import { Home, Projects, Blog } from './pages/index.jsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>   
    {/* Uso de HTML Semântico */}
    <BrowserRouter>
      <header>
        {/* Aqui vai o link envolvendo a logo */}
        <Navbar></Navbar>
      </header>
      
      <aside>
        Profile
      </aside>

      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/blog" element={<Blog/>} />            
        </Routes>
      </main>
    </BrowserRouter>   
    {/*
      <section id="center">
        <Card>Card</Card>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">       
        
      </section>

      <div className="ticks"></div>
      <section id="spacer">

      </section>
    */}
    </>
  )
}

export default App
