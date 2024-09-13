import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {BiLike,BiDislike,BiListPlus} from 'react-icons/bi'
import AppContext from '../../context/NxtWatch'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.css'

import {
  VideoContainer,
  VideoDetailsContainer,
  VideoTitle,
  ChannelName,
  DescriptionText,
  DescriptionTextS,
  FailureText,
  FailureDesc,
} from './styledComponents'

const apiStatusConsts = {
  sucess: 'SUCESS',
  inProgress: 'IN_PROGRESS',
  failed: 'FAILED',
}
class VideoItemDetails extends Component {
  state = {videoData: {}, status: 'INITIAL'}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    this.setState({status: apiStatusConsts.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(api, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({videoData: updatedData, status: apiStatusConsts.sucess})
    } else {
      this.setState({status: apiStatusConsts.failed})
    }
  }

  displaySucessView = mode => {
    const {videoData} = this.state
    const deviceWidth = window.innerWidth
    const {
      channel,
      description,
      id,
      publishedAt,
      thumbnailUrl,
      title,
      videoUrl,
      viewCount,
    } = videoData
    const date = new Date(publishedAt)
    const formattedDate = formatDistanceToNow(
      new Date(date.getFullYear(), date.getMonth(), date.getDay()),
    )

    return (
      <AppContext.Consumer>
        {value => {
          const {
            likedVideos,
            updateLikedVideos,
            disLikedVideos,
            updateDislikedVideos,
            savedVideos,
            addOrRemoveSavedVideos,
            savedIds,
          } = value
          const onClickLike = () => {
            updateLikedVideos(id)
          }

          const onClickDislike = () => {
            updateDislikedVideos(id)
          }

          const onClickSave = () => {
            addOrRemoveSavedVideos(videoData)
          }

          const isLiked = likedVideos.includes(id)
          const applyColor = isLiked && 'sp-color'
          const applyDislikedColor = disLikedVideos.includes(id) && 'sp-color'
          const applySaveColor = savedIds.includes(id) && 'sp-color'
          return (
            <VideoDetailsContainer mode={mode}>
              <div className="responsive-container">
                <ReactPlayer width="100%" controls url={videoUrl} />
              </div>
              <VideoTitle mode={mode}>{title}</VideoTitle>
              <div className="likes-views-container">
                <div className="views-container">
                  <p className="v-text">{viewCount} views</p>
                  <p className="v-text-">.</p>
                  <p className="v-text">{formattedDate} ago</p>
                </div>
                <div className="likes-container">
                  <button onClick={onClickLike} className="like-btn">
                    <BiLike size={20} className={`icon ${applyColor}`} />{' '}
                    <span className={`like-text ${applyColor}`}>Like</span>
                  </button>
                  <button onClick={onClickDislike} className='like-btn'>
                    <BiDislike
                      size={20}
                      className={`icon ${applyDislikedColor}`}
                    />{' '}
                    <span className={`like-text ${applyDislikedColor}`}>
                      Dislike
                    </span>
                  </button>
                  <button onClick={onClickSave} className="like-btn">
                    <BiListPlus
                      size={20}
                      className={`icon ${applySaveColor}`}
                    />{' '}
                    <span className={`like-text ${applySaveColor}`}>
                      {savedIds.includes(id) ? 'Saved' : 'Save'}
                    </span>
                  </button>
                </div>
              </div>
              <hr className="line" />
              <div className="description-container">
                <img
                  src={channel.profileImageUrl}
                  className="logo-img-d"
                  alt="channel-logo"
                />
                <div className="channel-name-sub-count-container">
                  <ChannelName mode={mode}>{channel.name}</ChannelName>
                  <p className="sub-text">
                    {channel.subscriberCount} subscribers
                  </p>
                  <DescriptionText mode={mode}>{description}</DescriptionText>
                </div>
              </div>
              <DescriptionTextS mode={mode}>{description}</DescriptionTextS>
            </VideoDetailsContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }

  displayLoadingView = () => 
    (
      <div className="loading-container-video">
        <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
      </div>
    )
  

  onClickRetry = () => {
    this.getVideoDetails()
  }

  displayFailedView = mode => {
    const url = mode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
    return (
      <div className="failure-container">
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
        return this.displayFailedView(mode)
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
              <div className="v-cont">
                <Sidebar />
                <VideoContainer>
                  {this.renderVideoDetails(isDarkMode)}
                </VideoContainer>
              </div>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default VideoItemDetails
