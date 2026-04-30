//import NavItem from './NavItem.jsx'

const Navbar = ({ className, children }) => {
  return (
    <nav className={className}>
        { children }
    </nav>
  )
}

export default Navbar