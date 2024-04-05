// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
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
          <div className="about-container">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="about-img"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="about-img"
              />
            )}
            <h1 className={headingClassName}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
