import AppContext from '../../context/NxtWatch'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.css'
import {NotFoundContainer, NotFoundText, NotFoundDesc} from './styledComponents'

const NotFound = () => (
  <AppContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const url = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
      return (
        <>
          <Header />
          <div className="not-found-container">
            <Sidebar />
            <NotFoundContainer mode={isDarkMode}>
              <img src={url} className="not-found-image" alt="not found" />
              <NotFoundText mode={isDarkMode}>Page Not Found</NotFoundText>
              <NotFoundDesc mode={isDarkMode}>
                We are sorry, the page you requested could not be found
              </NotFoundDesc>
            </NotFoundContainer>
          </div>
        </>
      )
    }}
  </AppContext.Consumer>
)

export default NotFound
