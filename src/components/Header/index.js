import {useState} from 'react'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import 'reactjs-popup/dist/index.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {FiSun,FiLogOut} from 'react-icons/fi'
import {MdHome} from 'react-icons/md'
import {SiYoutubegaming} from 'react-icons/si'
import {HiFire} from 'react-icons/hi'
import {CgPlayListAdd} from 'react-icons/cg'
import AppContext from '../../context/NxtWatch'
import './index.css'
import {
  HeaderContainer,
  ImgContainer,
  LogoImg,
  MobileContainer,
  DesktopContainer,
  ModeBtn,
  PopupContainer,
  LogoutBtn,
  RouteContainer,
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

const Header = props => {
  const {history} = props
  const {location} = history
  const {pathname} = location
  return (
    <AppContext.Consumer>
      {value => {
        const {isDarkMode, updateMode, isHamClicked, updateHam} = value
        const color = isDarkMode ? 'white' : 'black'
        const onClickModeBtn = () => {
          updateMode()
        }
        const onClickHambtn = () => {
          updateHam()
        }
        const onClickLogout = () => {
          Cookies.remove('jwt_token')
          history.replace('/login')
        }
        const logourl = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <>
            <HeaderContainer mode={isDarkMode}>
              <ImgContainer>
                <LogoImg src={logourl} alt="logo-img" />
              </ImgContainer>
              <MobileContainer>
                {isDarkMode ? (
                  <ModeBtn onClick={onClickModeBtn}>
                    <FiSun className={`sun ${color}`} />
                  </ModeBtn>
                ) : (
                  <ModeBtn onClick={onClickModeBtn}>
                    <FaMoon className={`sun ${color}`} />
                  </ModeBtn>
                )}
                <ModeBtn onClick={onClickHambtn}>
                  <GiHamburgerMenu className={`sun ${color}`} />
                </ModeBtn>
                <Popup
                  modal
                  trigger={
                    <ModeBtn>
                      <FiLogOut className={`sun ${color}`} />
                    </ModeBtn>
                  }
                  className="popup-content"
                >
                  {close => (
                    <>
                      <PopupContainer>
                        <p className="p-text">
                          Are you sure you want to logout?
                        </p>
                        <div className="btn-container">
                          <button onClick={() => close()} className="canc-btn">
                            Cancel
                          </button>
                          <button
                            onClick={onClickLogout}
                            className="confirm-btn"
                          >
                            Confirm
                          </button>
                        </div>
                      </PopupContainer>
                    </>
                  )}
                </Popup>
              </MobileContainer>

              <DesktopContainer>
                {isDarkMode ? (
                  <ModeBtn onClick={onClickModeBtn}>
                    <FiSun className={`sun ${color}`} />
                  </ModeBtn>
                ) : (
                  <ModeBtn onClick={onClickModeBtn}>
                    <FaMoon className={`sun ${color}`} />
                  </ModeBtn>
                )}
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                  className="profile-img"
                />
                <Popup
                  modal
                  trigger={<LogoutBtn mode={isDarkMode}>Logout</LogoutBtn>}
                  className="popup-content"
                >
                  {close => (
                    <>
                      <PopupContainer>
                        <p className="p-text">
                          Are you sure you want to logout?
                        </p>
                        <div className="btn-container">
                          <button onClick={() => close()} className="canc-btn">
                            Cancel
                          </button>
                          <button
                            onClick={onClickLogout}
                            className="confirm-btn"
                          >
                            Confirm
                          </button>
                        </div>
                      </PopupContainer>
                    </>
                  )}
                </Popup>
              </DesktopContainer>
            </HeaderContainer>
            {isHamClicked ? (
              <RouteContainer mode={isDarkMode}>
                <RouteListContainer>
                  <Link to="/" className="link">
                    <RouteListContainer>
                      <Icon
                        as={MdHome}
                        size={26}
                        selection={pathname === '/'}
                      />
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
              </RouteContainer>
            ) : (
              ''
            )}
          </>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
