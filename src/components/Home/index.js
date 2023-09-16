// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const lightModeHomeImage =
        'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const darkModeHomeImage =
        'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
      const imageUrl = isDarkTheme ? darkModeHomeImage : lightModeHomeImage
      const theme = isDarkTheme
        ? 'home-container-dark-mode'
        : 'home-container-light-mode'

      return (
        <>
          <Navbar />
          <div className={theme}>
            <img src={imageUrl} alt="home" className="home-image" />
            <h1>Home</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
