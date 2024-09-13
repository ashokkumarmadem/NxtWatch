import {Component} from 'react'
import {Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import Loader from 'react-loader-spinner'
import {IoMdClose} from 'react-icons/io'
import {BsSearch} from 'react-icons/bs'
import AppContext from '../../context/NxtWatch'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './index.css'
import {
  CombineContainer,
  HomeContainer,
  BannerContainer,
  HideBtn,
  BannerDetailsContainer,
  SearchListContainer,
  SearchContainer,
  VideosListContainer,
  SearchVideoContainer,
  SearchInput,
  Button,
  ListContainer,
  DescriptionContainer,
  Description,
  Title,
  BSDesc,
  NoResultsContainer,
  NoSearchText,
  NoSearchDesc,
  BLDesc,
  FailureText,
  FailureDesc,
} from './styledComponents'

const apiStatusConsts = {
  sucess: 'SUCESS',
  inProgress: 'IN_PROGRESS',
  failed: 'FAILED',
}
class Home extends Component {
  state = {status: 'INITIAL', videosArr: [], search: ''}

  componentDidMount() {
    this.getVideoDetails()
  }

  onChangeSearch = event => {
    this.setState({search: event.target.value})
  }

  onClickSearch = () => {
    this.getVideoDetails()
    this.setState({search: ''})
  }

  getVideoDetails = async () => {
    const {search} = this.state
    this.setState({status: apiStatusConsts.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const api = `https://apis.ccbp.in/videos/all?search=${search}`
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

  onClickRetry = () => {
    this.getVideoDetails()
  }

  displaySucessView = mode => {
    const {videosArr, search} = this.state
    return (
      <SearchVideoContainer mode={mode}>
        <SearchContainer>
          <SearchInput
            value={search}
            onChange={this.onChangeSearch}
            type="search"
            mode={mode}
            placeholder="Search..."
          />
          <Button onClick={this.onClickSearch} mode={mode}>
            <BsSearch className="search-icon" />
          </Button>
        </SearchContainer>
        {videosArr.length > 0 ? (
          <VideosListContainer>
            {videosArr.map(each => {
              const date = new Date(each.publishedAt)
              const formattedDate = formatDistanceToNow(
                new Date(date.getFullYear(), date.getMonth(), date.getDay()),
              )
              return (
                <ListContainer key={each.id}>
                  <Link to={`/videos/${each.id}`} className="nav-link">
                    <img src={each.thumbnailUrl} className="thumbnai-img" />
                    <DescriptionContainer>
                      <img
                        src={each.channel.profileImageUrl}
                        className="channel-logo"
                        alt="profile"
                      />
                      <Description>
                        <Title mode={mode}>{each.title}</Title>
                        <BSDesc>
                          <p className="desc">{each.channel.name}</p>
                          <p className="desc">.</p>
                          <p className="desc">{each.viewCount} views</p>
                          <p className="desc">.</p>
                          <p className="desc">{formattedDate} ago</p>
                        </BSDesc>
                        <div className="lg-con">
                          <p className="desc">{each.channel.name}</p>
                          <BLDesc>
                            <p className="desc">{each.viewCount} views</p>
                            <p className="desc">.</p>
                            <p className="desc">{formattedDate} ago</p>
                          </BLDesc>
                        </div>
                      </Description>
                    </DescriptionContainer>
                  </Link>
                </ListContainer>
              )
            })}
          </VideosListContainer>
        ) : (
          <NoResultsContainer>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              className="no-search-img"
              alt="no-videos"
            />
            <NoSearchText mode={mode}>No Search results found</NoSearchText>
            <NoSearchDesc mode={mode}>
              Try different key words or remove search filter
            </NoSearchDesc>
            <button onClick={this.onClickRetry} className="no-search-btn">
              Retry
            </button>
          </NoResultsContainer>
        )}
      </SearchVideoContainer>
    )
  }

  displayLoadingView = () => (
    <div className="loading-container">
      <Loader type="ThreeDots" color=" #3b82f6" height="50" width="50" />
    </div>
  )

  displayFailureView = mode => {
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

  renderContainer = mode => {
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
          const {isDarkMode, showBanner, updateShowBanner} = value
          const onClickHidebtn = () => {
            updateShowBanner()
          }
          return (
            <>
              <Header />
              <CombineContainer>
                <Sidebar />
                <HomeContainer>
                  {showBanner ? (
                    <BannerContainer>
                      <HideBtn onClick={onClickHidebtn}>
                        <IoMdClose className="close-icon" />
                      </HideBtn>
                      <BannerDetailsContainer>
                        <img
                          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                          className="banner-logo"
                          alt="logo"
                        />
                        <p className="banner-text">
                          Buy Nxt Watch Premium prepaid plans with UPI
                        </p>
                        <button className="get-btn">GET IT NOW</button>
                      </BannerDetailsContainer>
                    </BannerContainer>
                  ) : (
                    ''
                  )}
                  <SearchListContainer mode={isDarkMode}>
                    {this.renderContainer(isDarkMode)}
                  </SearchListContainer>
                </HomeContainer>
              </CombineContainer>
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
export default Home
