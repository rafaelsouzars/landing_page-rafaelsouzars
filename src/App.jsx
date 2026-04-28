//import { useState } from 'react'
//import { reactLogo, viteLogo, heroImg } from './assets/index.jsx'
import { heroImg } from './assets/index.jsx'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router'
import { Navbar, CardProfile } from './components/index.jsx'
import { Home, Projects, Blog } from './pages/index.jsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>   
    {/* Uso de HTML Semântico */}
    <BrowserRouter>
      <header>
        <div className='header'>
        {/* Aqui vai o link envolvendo a logo */}
        <Link className='dev-logo' to="/"><img src={heroImg} alt="My logo" width="80px" height="40px"/></Link>        
        <Navbar className='navbar'>
          <NavLink to="/" className='nav-item'>Home</NavLink>
          <NavLink to="/projects" className='nav-item'>Projects</NavLink>
          <NavLink to="/blog" className='nav-item'>Blog</NavLink>
        </Navbar>
        </div>
      </header>

      <div className='main-content'>
      <aside>
        <CardProfile>Profile</CardProfile>
      </aside>

      <main>        
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/blog" element={<Blog/>} />            
        </Routes>        
      </main>      
      </div>

      <footer>
        <div>Footer</div>
      </footer>      
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
