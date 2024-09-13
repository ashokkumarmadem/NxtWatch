import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import AppContext from './context/NxtWatch'
import LoginPage from './components/LoginPage'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import Savedvideos from './components/Savedvideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import './App.css'

class App extends Component {
  state = {
    mode: false,
    ham: false,
    banner: true,
    likedVideos: [],
    disLikedVideos: [],
    savedVideos: [],
    savedIds: [],
  }

  updateMode = () => {
    this.setState(prev => ({mode: !prev.mode}))
  }

  updateHam = () => {
    this.setState(prev => ({ham: !prev.ham}))
  }

  updateShowBanner = () => {
    this.setState(prev => ({banner: !prev.banner}))
  }

  addOrRemoveLiked = id => {
    const {likedVideos, disLikedVideos} = this.state
    if (disLikedVideos.includes(id)) {
      this.setState(prev => ({
        disLikedVideos: prev.disLikedVideos.filter(each => each !== id),
      }))
    }
    if (likedVideos.includes(id)) {
      this.setState({
        likedVideos: likedVideos.filter(each => each !== id),
      })
    } else {
      this.setState({likedVideos: [...likedVideos, id]})
    }
  }

  addOrRemoveDisiked = id => {
    const {likedVideos, disLikedVideos} = this.state
    if (likedVideos.includes(id)) {
      this.setState({likedVideos: likedVideos.filter(each => each !== id)})
    }
    if (disLikedVideos.includes(id)) {
      this.setState({
        disLikedVideos: disLikedVideos.filter(each => each !== id),
      })
    } else {
      this.setState({disLikedVideos: [...disLikedVideos, id]})
    }
  }

  addOrRemoveSavedVideos = videoData => {
    const {savedVideos, savedIds} = this.state

    if (savedIds.includes(videoData.id)) {
      this.setState({
        savedVideos: savedVideos.filter(each => each.id !== videoData.id),
        savedIds: savedIds.filter(each => each !== videoData.id),
      })
    } else {
      this.setState({
        savedVideos: [...savedVideos, videoData],
        savedIds: [...savedIds, videoData.id],
      })
    }
  }

  render() {
    const {
      mode,
      ham,
      banner,
      likedVideos,
      disLikedVideos,
      savedVideos,
      savedIds,
    } = this.state
    return (
      <AppContext.Provider
        value={{
          isDarkMode: mode,
          updateMode: this.updateMode,
          isHamClicked: ham,
          updateHam: this.updateHam,
          showBanner: banner,
          updateShowBanner: this.updateShowBanner,
          likedVideos,
          updateLikedVideos: this.addOrRemoveLiked,
          disLikedVideos,
          updateDislikedVideos: this.addOrRemoveDisiked,
          savedVideos,
          addOrRemoveSavedVideos: this.addOrRemoveSavedVideos,
          savedIds,
        }}
      >
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LoginPage} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/saved-videos" component={Savedvideos} />
          <Route exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
