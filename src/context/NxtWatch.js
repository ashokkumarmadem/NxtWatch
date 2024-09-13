import React from 'react'

const AppContext = React.createContext({
  isDarkMode: false,
  updateMode: () => {},
  isHamClicked: false,
  updateHam: () => {},
  showBanner: true,
  updateShowBanner: () => {},
  likedVideos: [],
  updateLikedVideos: () => {},
  disLikedVideos: [],
  updateDislikedVideos: () => {},
  savedVideos: [],
  addOrRemoveSavedVideos: () => {},
  savedIds: [],
})

export default AppContext
