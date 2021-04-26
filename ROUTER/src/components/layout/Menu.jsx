import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'

 const Menu = props => {

  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            
          </li>
          <li>
            <Link to="/param/1222">Param #01</Link>
          </li>
          <li>
            <Link to="/param/cool">Param #02</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blablabla">No Exists</Link>
          </li>
        </ul>
      </nav>
    </aside>
)
}

export default Menu