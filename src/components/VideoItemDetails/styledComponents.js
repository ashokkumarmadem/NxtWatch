import styled from 'styled-components'

export const VideoContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    width: 83vw;
  }
`
export const VideoDetailsContainer = styled.div`
  background-color: ${props => (props.mode === true ? '#1e293b' : ' #f1f5f9')};
  @media screen and (max-width: 768px) {
    max-height: 100vh;
    overflow: auto;
  }
  @media screen and (min-width: 768px) {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    width: 83vw;
  }
`

export const VideoTitle = styled.h3`
  font-family: 'Roboto';
  color: ${props => (props.mode === true ? 'white' : 'black')};
  font-size: 18px;
  padding-left: 6px;
  padding-right: 6px;
`
export const ChannelName = styled.p`
  color: ${props => (props.mode === true ? 'white' : 'black')};
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 430;
`
export const DescriptionText = styled.p`
  color: ${props => (props.mode === true ? 'white' : 'black')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 340;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const DescriptionTextS = styled(DescriptionText)`
  padding-left: 8px;
  padding-right: 5px;
  @media screen and (max-width: 768px) {
    display: block;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
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
