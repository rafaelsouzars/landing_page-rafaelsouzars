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
      <header className='header-content'>        
        {/* Aqui vai o link envolvendo a logo */}              
        <Navbar className='navbar'>
          <Link className='dev-logo' to="/"><img src={heroImg} alt="My logo" width="80px" height="40px"/></Link>
          <div className='navbar-menu'> 
            <NavLink to="/" className='nav-item'>Home</NavLink>
            <NavLink to="/projects" className='nav-item'>Projects</NavLink>
            <NavLink to="/blog" className='nav-item'>Blog</NavLink>
          </div> 
        </Navbar>        
      </header>

      <div className='content'>
        <aside className='aside-content'>
          <CardProfile>Profile</CardProfile>
        </aside>

        <main className='main-content'>        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} />            
          </Routes>        
        </main>      
      </div>

      <footer className='footer-content'>
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
