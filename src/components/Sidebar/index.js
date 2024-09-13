import {withRouter, Link} from 'react-router-dom'
import {MdHome} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import AppContext from '../../context/NxtWatch'
import {
  RouteListContainer,
  Icon,
  NavigationText,
  RouteDesktopContainer,
  FooterContainer,
  FooterHeading,
  FooIconsContainer,
  FooImg,
  FooDesc,
} from './styledComponents'

const Sidebar = props => 
  (
    <AppContext.Consumer>
      {value => {
        const {history} = props
        const {location} = history
        const {pathname} = location
        const {isDarkMode} = value
        return (
          <RouteDesktopContainer mode={isDarkMode}>
            <ul className="dis">
              <RouteListContainer>
                <Link to="/" className="link">
                  <RouteListContainer>
                    <Icon as={MdHome} size={26} selection={pathname === '/'} />
                    <NavigationText
                      mode={isDarkMode}
                      selection={pathname === '/'}
                    >
                      Home
                    </NavigationText>
                  </RouteListContainer>
                </Link>
              </RouteListContainer>
              <RouteListContainer>
                <Link to="/trending" className="link">
                  <RouteListContainer>
                    <Icon
                      as={HiFire}
                      size={26}
                      selection={pathname === '/trending'}
                    />
                    <NavigationText
                      mode={isDarkMode}
                      selection={pathname === 'trending'}
                    >
                      Trending
                    </NavigationText>
                  </RouteListContainer>
                </Link>
              </RouteListContainer>
              <RouteListContainer>
                <Link to="/gaming" className="link">
                  <RouteListContainer>
                    <Icon
                      as={SiYoutubegaming}
                      size={26}
                      selection={pathname === '/gaming'}
                    />
                    <NavigationText
                      mode={isDarkMode}
                      selection={pathname === '/gaming'}
                    >
                      Gaming
                    </NavigationText>
                  </RouteListContainer>
                </Link>
              </RouteListContainer>
              <RouteListContainer>
                <Link to="/saved-videos" className="link">
                  <RouteListContainer>
                    <Icon
                      as={CgPlayListAdd}
                      size={26}
                      selection={pathname === '/saved-videos'}
                    />
                    <NavigationText
                      mode={isDarkMode}
                      selection={pathname === '/saved-videos'}
                    >
                      Saved videos
                    </NavigationText>
                  </RouteListContainer>
                </Link>
              </RouteListContainer>
            </ul>
            <FooterContainer>
              <FooterHeading mode={isDarkMode}>CONTACT US</FooterHeading>
              <FooIconsContainer>
                <FooImg
                  alt="facebook logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                />
                <FooImg
                  alt="twitter logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                />
                <FooImg
                  alt="linked in logo"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                />
              </FooIconsContainer>
              <FooDesc mode={isDarkMode}>
                Enjoy! Now to see your channels and recommendations!
              </FooDesc>
            </FooterContainer>
          </RouteDesktopContainer>
        )
      }}
    </AppContext.Consumer>
  )


export default withRouter(Sidebar)
