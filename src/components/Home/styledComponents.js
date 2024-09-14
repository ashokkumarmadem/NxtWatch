import styled from 'styled-components'

export const HomeContainer = styled.div``

export const CombineContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  min-height: 50vh;
  width: 80vw;
  margin-top: 0px;
  display: flex;
  justify-content: space-between;
  padding: 40px;
  @media screen and (max-width: 767px) {
    padding: 0px;
    width: 100vw;
    padding: 16px;
    min-height: 25vh;
  }
`
export const HideBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  order: 1;
  align-self: flex-start;
`
export const BannerDetailsContainer = styled.div`
  margin: 0px;
`

export const SearchListContainer = styled.div`
  margin: 0px;
  background-color: ${props => (props.mode === true ? '#1e293b' : ' #f1f5f9')};
  min-height: 120vh;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 83vw;
  @media screen and (max-width: 767px) {
    width: 100vw;
    justify-content: center;
  }
`

export const VideosListContainer = styled.ul`
  height: 160vh;
  width: 100vw;
  overflow: scroll;
  padding-left: 0px;
  @media screen and (min-width: 568px) {
    display: flex;
    flex-wrap: wrap;
    padding-left: 4px;
    padding-right: 4px;
  }
  @media screen and (min-width: 768px) {
    width: 83vw;
  }
`

export const SearchVideoContainer = styled.div`
  background-color: ${props => (props.mode === true ? '#1e293b' : ' #f1f5f9')};
  padding-top: 10px;
`
export const SearchInput = styled.input`
  height: 34px;
  width: 40%;
  outline: none;
  background-color: ${props =>
    props.mode === true ? 'transparent' : ' #f9f9f9'};
  border: 1px solid;
  border-color: ${props => (props.mode === false ? '#0f0f0f' : ' #f9f9f9')};
  color: ${props => (props.mode === true ? '#f1f1f1' : ' black')};
  padding-left: 8px;
  @media screen and (max-width: 767px) {
    width: 80%;
  }
`
export const Button = styled.button`
  background-color: ${props =>
    props.mode === true ? 'transparent' : ' #f9f9f9'};
  border: 1px solid;
  border-color: ${props => (props.mode === false ? '#0f0f0f' : ' #f9f9f9')};
  color: ${props => (props.mode === true ? '#f1f1f1' : ' black')};
  height: 34px;
  width: 60px;
  cursor: pointer;
`
export const ListContainer = styled.li`
  list-style-type: none;
  cursor: pointer;
  @media screen and (max-width: 575px) {
    width: 100vw;
  }
  @media screen and (min-width: 580px) and (max-width: 840px) {
    width: 48%;
    margin-right: 10px;
  }
  @media screen and (min-width: 841px) {
    width: 335px;
    min-height: 300px;
    margin-right: auto;
    margin-bottom: 6px;
  }
`
export const DescriptionContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const Description = styled.div``

export const Title = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.mode === true ? 'white' : 'black')};
  margin-bottom: 0px;
`
export const BSDesc = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
  @media screen and (min-width: 568px) {
    display: none;
  }
`
export const NoResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`

export const NoSearchText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.mode === true ? 'white' : 'black')};
  font-weight: bold;
  font-size: 26px;
`

export const NoSearchDesc = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.mode === true ? 'white' : 'black')};
  font-size: 20px;
`
export const BLDesc = styled.div`
  display: flex;
  align-items: center;
`
export const FailureText = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.mode === false ? 'black' : 'white')};
  font-size: 20px;
  font-weight: 600;
`

export const FailureDesc = styled(FailureText)`
  font-weight: 350;
  font-size: 14px;
`
