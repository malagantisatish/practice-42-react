// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const lightModeAboutImage =
        'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const darkModeAboutImage =
        'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'

      const imageUrl = isDarkTheme ? darkModeAboutImage : lightModeAboutImage

      const theme = isDarkTheme
        ? 'about-container-dark-mode'
        : 'about-container-light-mode'

      return (
        <>
          <Navbar />
          <div className={theme}>
            <img src={imageUrl} alt="about" className="about-image" />
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
