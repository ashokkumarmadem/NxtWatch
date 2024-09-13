import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {SiYoutubegaming} from 'react-icons/si'
import Header from '../Header'
import Sidebar from '../Sidebar'
import AppContext from '../../context/NxtWatch'

import './index.css'

import {
  GamingVideoContainer,
  TopContainer,
  ImageCon,
  SavedText,
  GamingContainer,
  BottomContainer,
  EachVideoItem,
  GamingTitle,
  ViewCount,
  FailureDesc,
  FailureText,
} from './styledComponents'

const apiStatusConsts = {
  sucess: 'SUCESS',
  inProgress: 'IN_PROGRESS',
  failed: 'FAILED',
}
class Gaming extends Component {
  state = {status: 'INITIAL', videosArr: []}

  componentDidMount() {
    this.getGamingDetails()
  }

  getGamingDetails = async () => {
    this.setState({status: apiStatusConsts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedData = data.videos.map(each => ({
        id: each.id,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({videosArr: updatedData, status: apiStatusConsts.sucess})
    } else {
      this.setState({status: apiStatusConsts.failed})
    }
  }

  renderDetails = mode => {
    const {status} = this.state
    switch (status) {
      case apiStatusConsts.sucess:
        return this.displaySucessView(mode)
      case apiStatusConsts.inProgress:
        return this.displayLoadingView(mode)
      case apiStatusConsts.failed:
        return this.displayFailureView(mode)
      default:
        return null
    }
  }

  displaySucessView = mode => {
    const {videosArr} = this.state
    return (
      <GamingContainer>
        <TopContainer mode={mode}>
          <ImageCon mode={mode}>
            <SiYoutubegaming size={30} color="red" />
          </ImageCon>
          <SavedText mode={mode}>Gaming</SavedText>
        </TopContainer>
        <BottomContainer>
          {videosArr.map(each => {
            const {id, thumbnailUrl, title, viewCount} = each
            return (
              <Link to={`/videos/${id}`} className="link">
                <EachVideoItem>
                  <img
                    src={thumbnailUrl}
                    alt="thumbnail"
                    className="gaming-image"
                  />
                  <GamingTitle mode={mode}>{title}</GamingTitle>
                  <ViewCount mode={mode}>
                    {viewCount} Watching Worldwide
                  </ViewCount>
                </EachVideoItem>
              </Link>
            )
          })}
        </BottomContainer>
      </GamingContainer>
    )
  }

  displayLoadingView = mode => 
    (
      <div className="loading-container-tr">
        <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
      </div>
    )
  

  onClickRetry = () => {
    this.getGamingDetails()
  }

  displayFailureView = mode => {
    const url = mode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <div className="failure-container-trending">
        <img src={url} className="failure-img" alt="failure-img" />
        <FailureText mode={mode}>Oops! Something Went Wrong</FailureText>
        <FailureDesc mode={mode}>
          We are having some trouble to complete your request. Please try again.
        </FailureDesc>
        <button onClick={this.onClickRetry} className="retry-btn">
          Retry
        </button>
      </div>
    )
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header />
              <div className="gaming">
                <Sidebar />
                <GamingVideoContainer mode={isDarkMode}>
                  {this.renderDetails(isDarkMode)}
                </GamingVideoContainer>
              </div>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Gaming
