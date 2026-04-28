//import React from 'react'

const NavItem = ({ hRef, nameItem }) => {
  return (
    <li>
        <a href={hRef ?? '#'}>{nameItem}</a>
    </li>
  )
}

export default NavItem