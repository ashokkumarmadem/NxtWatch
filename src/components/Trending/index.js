import {Component} from 'react'
import {Link} from 'react-router-dom'
import {HiFire} from 'react-icons/hi'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'
import AppContext from '../../context/NxtWatch'
import './index.css'
import {
  TrendingContainer,
  TVideoContainer,
  VideosContainer,
  TopContainer,
  ImageCon,
  SavedText,
  BottomContainer,
  VideoItem,
  DescriptionsmContainer,
  TextContainer,
  DText,
  DetailsContainer,
  DescriptionlgContainer,
  FailureText,
  FailureDesc,
} from './styledComponents'

const apiStatusConsts = {
  sucess: 'SUCESS',
  inProgress: 'IN_PROGRESS',
  failed: 'FAILED',
}
class Trending extends Component {
  state = {videosArr: [], status: 'INITIAL'}

  componentDidMount() {
    this.getTrendingVideoDetails()
  }

  getTrendingVideoDetails = async () => {
    this.setState({status: apiStatusConsts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const api = 'https://apis.ccbp.in/videos/trending'
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
        channel: {
          name: each.channel.name,
          profileImageUrl: each.channel.profile_image_url,
        },
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))
      this.setState({videosArr: updatedData, status: apiStatusConsts.sucess})
    } else {
      this.setState({status: apiStatusConsts.failed})
    }
  }

  displaySucessView = mode => {
    const {videosArr} = this.state
    return (
      <VideosContainer>
        <TopContainer mode={mode}>
          <ImageCon mode={mode}>
            <HiFire size={30} color="red" />
          </ImageCon>
          <SavedText mode={mode}>Trending</SavedText>
        </TopContainer>
        <BottomContainer>
          {videosArr.map(each => {
            const {
              channel,
              description,
              id,
              publishedAt,
              thumbnailUrl,
              title,
              videoUrl,
              viewCount,
            } = each
            const date = new Date(publishedAt)
            const formattedDate = formatDistanceToNow(
              new Date(date.getFullYear(), date.getMonth(), date.getDay()),
            )

            return (
              <Link to={`/videos/${id}`} className="link">
                <VideoItem>
                  <img
                    src={thumbnailUrl}
                    className="trending-image"
                    alt="trending"
                  />
                  <DescriptionsmContainer>
                    <img
                      src={channel.profileImageUrl}
                      alt="profile"
                      className="profile-image-desc-sm"
                    />
                    <TextContainer>
                      <DText mode={mode}>{title}</DText>
                      <DetailsContainer>
                        <p className="d-text">{channel.name}</p>
                        <p className="dot">.</p>
                        <p className="d-text">{viewCount} views</p>
                        <p className="dot">.</p>
                        <p className="d-text">{formattedDate} ago</p>
                      </DetailsContainer>
                    </TextContainer>
                  </DescriptionsmContainer>
                  <DescriptionlgContainer>
                    <DText mode={mode}>{title}</DText>
                    <p className="d-text">{channel.name}</p>
                    <div className="dl-con">
                      <p className="d-text">{viewCount} views</p>
                      <p className="dot">.</p>
                      <p className="d-text">{formattedDate} ago</p>
                    </div>
                  </DescriptionlgContainer>
                </VideoItem>
              </Link>
            )
          })}
        </BottomContainer>
      </VideosContainer>
    )
  }

  displayLoadingView = () => (
    <div className="loading-container-tr">
      <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getTrendingVideoDetails()
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

  renderVideoDetails = mode => {
    const {status} = this.state
    switch (status) {
      case apiStatusConsts.sucess:
        return this.displaySucessView(mode)
      case apiStatusConsts.inProgress:
        return this.displayLoadingView()
      case apiStatusConsts.failed:
        return this.displayFailureView(mode)
      default:
        return null
    }
  }

  render() {
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <>
              <Header />
              <TrendingContainer>
                <Sidebar />
                <TVideoContainer mode={isDarkMode}>
                  {this.renderVideoDetails(isDarkMode)}
                </TVideoContainer>
              </TrendingContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Trending
