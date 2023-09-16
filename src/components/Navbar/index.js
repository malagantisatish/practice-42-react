// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const lightThemeImageUrl =
        'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const darkThemeImageUrl =
        'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
      const lightMode =
        'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
      const darkMode =
        'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      const themeChangeBtn = isDarkTheme ? lightMode : darkMode
      const logoImage = isDarkTheme ? darkThemeImageUrl : lightThemeImageUrl
      const themeColor = isDarkTheme
        ? 'navbar-container-dark-mode'
        : 'navbar-container-light-mode'
      const textColor = isDarkTheme ? 'dark-mode' : 'light-mode'
      const toggleTheTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={themeColor}>
          <img src={logoImage} alt="website logo" className="logo-size" />
          <ul className="home-about-container">
            <li>
              <Link to="/" className="nav-item">
                <h1 className={textColor}>Home</h1>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-item">
                <h1 className={textColor}>About</h1>
              </Link>
            </li>
          </ul>
          <button type="button" className="theme-btn" data-testid="theme">
            <img
              src={themeChangeBtn}
              alt="theme"
              className="theme-mode-image"
              onClick={toggleTheTheme}
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
