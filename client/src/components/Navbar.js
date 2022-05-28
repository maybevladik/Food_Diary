import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
      event.preventDefault()

      auth.logout()
      navigate('/')
    }

    return(
        <nav>
    <div class="nav-wrapper green">
      <span class="brand-logo">Щоденник харчування</span>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><NavLink to = '/dish'>Страви</NavLink></li>
        <li><NavLink to = '/menu'>Меню</NavLink></li>
        <li><NavLink to = '/calories'>Підрахунок калорій</NavLink></li>
        <li><a href="/" onClick = { logoutHandler }>Вийти</a></li>
      </ul>
    </div>
  </nav>
    )
}