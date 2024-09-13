import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {HiFire} from 'react-icons/hi'
import AppContext from '../../context/NxtWatch'
import Header from '../Header'
import Sidebar from '../Sidebar'
import {
  SavedVideosContainer,
  NoSavedHeading,
  NosavedDesc,
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
} from './styledComponents'
import './index.css'

const Savedvideos = () => 
  (
    <AppContext.Consumer>
      {value => {
        const {savedVideos, isDarkMode, savedIds} = value
        const displaySavedVideos = () => 
          (
            <VideosContainer>
              <TopContainer mode={isDarkMode}>
                <ImageCon mode={isDarkMode}>
                  <HiFire size={30} color="red" />
                </ImageCon>
                <SavedText mode={isDarkMode}>Saved Videos</SavedText>
              </TopContainer>
              <BottomContainer>
                {savedVideos.map(each => {
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
                    new Date(
                      date.getFullYear(),
                      date.getMonth(),
                      date.getDay(),
                    ),
                  )

                  return (
                    <Link to={`/videos/${id}`} className="link">
                      <VideoItem>
                        <img
                          src={thumbnailUrl}
                          className="save-video-img-sp"
                          alt="save"
                        />
                        <DescriptionsmContainer>
                          <img
                            src={channel.profileImageUrl}
                            alt="profile"
                            className="profile-image-desc-sm"
                          />
                          <TextContainer>
                            <DText mode={isDarkMode}>{title}</DText>
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
                          <DText mode={isDarkMode}>{title}</DText>
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
        

        const displayNoVideos = () => 
         (
            <div className="no-videos-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png "
                className="no-video-img"
                alt="no videos saved"
              />
              <NoSavedHeading mode={isDarkMode}>
                No saved videos found
              </NoSavedHeading>
              <NosavedDesc mode={isDarkMode}>
                You can save your videos while watching them.
              </NosavedDesc>
            </div>
          )
        
        return (
          <>
            <Header />
            <SavedVideosContainer mode={isDarkMode}>
              <Sidebar />
              {savedVideos.length > 0
                ? displaySavedVideos()
                : displayNoVideos()}
            </SavedVideosContainer>
          </>
        )
      }}
    </AppContext.Consumer>
  )


export default Savedvideos
