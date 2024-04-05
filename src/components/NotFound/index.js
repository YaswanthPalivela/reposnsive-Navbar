// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      console.log(isDarkTheme)
      const headingClassName = isDarkTheme
        ? 'not-heading-dark'
        : 'not-heading-light'
      const description = isDarkTheme
        ? 'not-description-dark'
        : 'not-description-light'
      const divClassName = isDarkTheme
        ? 'bg-container-dark'
        : 'bg-container-light'

      return (
        <div className={divClassName}>
          <Navbar />
          <div className="not-found">
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
              className="not-found-image"
            />
            <h1 className={headingClassName}>Lost Your Way?</h1>
            <p className={description}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
