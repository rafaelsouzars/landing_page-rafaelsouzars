//import NavItem from './NavItem.jsx'

const Navbar = ({ children }) => {
  return (
    <nav>
        <ul>
            {children.forEach(element => {
                return element
            })}
        </ul>
    </nav>
  )
}

export default Navbar