//import { useState } from 'react'
//import { reactLogo, viteLogo, heroImg } from './assets/index.jsx'
import { logoDev } from './assets/index.jsx'
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router'
import { Navbar, CardProfile } from './components/index.jsx'
import { Home, Skills, Projects, Blog, About } from './pages/index.jsx'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>   
    {/* Uso de HTML Semântico */}
    <BrowserRouter>
      <header className='header card sticky top-translate'>        
        {/* Aqui vai o link envolvendo a logo */}              
        <Navbar className='navbar'>
          <Link className='logo' to="/"><img src={logoDev} alt="My logo"/></Link>
          <div className='navbar-menu'> 
            <NavLink to="/" className='nav-item'>Home</NavLink>
            <NavLink to="/skills" className='nav-item'>Skills</NavLink>
            <NavLink to="/projects" className='nav-item'>Projects</NavLink>
            <NavLink to="/blog" className='nav-item'>Blog</NavLink>
            <NavLink to="/about" className='nav-item'>About</NavLink>
          </div> 
        </Navbar>        
      </header>

      
        <aside className='aside card sticky-aside left-translate'>
          <CardProfile></CardProfile>
        </aside>

        <main className='main card right-translate'>        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/blog" element={<Blog/>} /> 
            <Route path="/about" element={<About/>} />           
          </Routes>        
        </main>      
      

      {/* <footer className='footer card bottom-translate'>
        <div>© Rafael Souza 2026</div>
      </footer> */}      
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
