import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onChangeTheme = () => {
        toggleTheme()
      }

      return (
        <>
          {isDarkTheme && (
            <nav className="navbar-container-dark ">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                alt="website logo"
                className="img-icon"
              />
              <ul className="navbar-menu">
                <li className="nav-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <button type="button" className="button" onClick={onChangeTheme}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  alt="theme"
                  className="img-icon"
                />
              </button>
            </nav>
          )}
          {!isDarkTheme && (
            <nav className="navbar-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                alt="website logo"
                className="img-icon"
              />
              <ul className="navbar-menu">
                <li className="nav-link">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                  <Link to="/about">About</Link>
                </li>
              </ul>
              <button type="button" className="button" onClick={onChangeTheme}>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  alt="theme"
                  className="img-icon"
                />
              </button>
            </nav>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
