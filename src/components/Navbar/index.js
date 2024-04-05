// Write your code here
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const navbarClassName = isDarkTheme ? 'navbar-dark' : 'navbar-light'
      const optionClassName = isDarkTheme ? 'option-dark' : 'option-light'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeImageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const themeChangeClicked = () => {
        toggleTheme()
      }

      return (
        <nav className={navbarClassName}>
          <img src={imageUrl} alt="website logo" className="navbar-logo" />

          <ul className="options-container">
            <Link to="/" className={optionClassName}>
              <li>Home</li>
            </Link>
            <Link to="/about" className={optionClassName}>
              <li>About</li>
            </Link>
          </ul>
          <button
            type="button"
            data-testid="theme"
            onClick={themeChangeClicked}
            className="theme-button"
          >
            <img src={themeImageUrl} alt="theme" className="navbar-logo" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar
