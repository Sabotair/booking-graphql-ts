import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logoutUser } from '../../store/auth/action'
import { RootState } from '../../store/reducers'

const Header: React.FC = () => {
  const token = useSelector<RootState>((state) => {
    return state.auth.token
  })
  const dispatch = useDispatch()

  const handleLogout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    dispatch(logoutUser({ userId: '', token: '', tokenExpiration: 0 }))
  }

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <NavLink to="/">
            <img
              src="img/logo.png"
              aria-hidden
              alt="Picture of me taking a photo of an image"
            />
          </NavLink>
        </div>
        <nav>
          <ul className="nav">
            {!token && (
              <Fragment>
                <li className="nav__link">
                  <NavLink className="btn" to="/login">
                    Login
                  </NavLink>
                </li>
                <li className="nav__link">
                  <NavLink className="btn" to="/register">
                    Register
                  </NavLink>
                </li>
              </Fragment>
            )}
            {token && (
              <Fragment>
                <li className="nav__link">
                  <NavLink className="btn" to="/order">
                    Order list
                  </NavLink>
                </li>
                <li className="nav__link">
                  <NavLink className="btn" to="/create">
                    Create Cards
                  </NavLink>
                </li>
                <li className="nav__link">
                  <NavLink onClick={handleLogout} className="btn" to="/">
                    LOGOUT
                  </NavLink>
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
