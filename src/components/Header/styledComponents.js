import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${props => (props.mode === false ? '#f9f9f9' : '#0f0f0f')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;

  @media screen and (max-width: 767px) {
    position: sticky;
    top: 0;
    height: 10vh;
  }
  @media screen and (min-width: 768px) {
    height: 15vh;
    padding-left: 50px;
    padding-right: 50px;
    top: 0;
    position: sticky;
  }
`

export const ImgContainer = styled.div``

export const LogoImg = styled.img`
  height: 26px;
  width: 120px;
  @media screen and (min-width: 768px) {
    height: 40px;
    width: 150px;
  }
`

export const MobileContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
  justify-content: space-around;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const ModeBtn = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`
export const PopupContainer = styled.div``

export const LogoutBtn = styled.button`
  height: 34px;
  width: 90px;
  font-family: 'Roboto';
  background-color: transparent;
  border: 2px solid
    ${props => (props.mode === false ? 'rgb(23, 105, 227)' : 'white')};
  font-family: 'Roboto';
  color: ${props => (props.mode === false ? 'rgb(23, 105, 227)' : 'white')};
  font-weight: bold;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
`
export const RouteContainer = styled.ul`
  margin-top: 0px;
  background-color: ${props => (props.mode === false ? '#f9f9f9' : '#0f0f0f')};
  margin-bottom: 0px;

  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const RouteListContainer = styled.li`
  list-style-type: none;
  display: flex;
  align-items: center;
  font-family: 'Roboto';
`
export const Icon = styled.div`
  color: ${props => (props.selection === true ? '#ff0b37' : ' #606060')};
  margin-right: 10px;
`

export const NavigationText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.mode === true ? '#e2e8f0' : 'black')};
  font-weight: ${props => (props.selection === true ? 600 : 400)};
  font-size: 16px;
`
export const RouteDesktopContainer = styled.div`
  background-color: ${props => (props.mode === false ? '#f9f9f9' : '#0f0f0f')};
  width: 20%;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 30px;
  padding-left: 20px;
  min-height: 120vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const FooterContainer = styled.div``

export const FooterHeading = styled.h3`
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.mode === true ? 'white' : 'black')};
`
export const FooIconsContainer = styled.div``

export const FooImg = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 12px;
`

export const FooDesc = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.mode === true ? 'white' : 'black')};
  font-weight: 500;
  font-size: 18px;
`
