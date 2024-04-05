// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const divClassName = isDarkTheme
        ? 'bg-container-dark'
        : 'bg-container-light'

      const headingClassName = isDarkTheme ? 'heading-dark' : 'heading-light'
      return (
        <div className={divClassName}>
          <Navbar />
          <div className="home-container">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home-img"
              />
            )}
            <h1 className={headingClassName}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
