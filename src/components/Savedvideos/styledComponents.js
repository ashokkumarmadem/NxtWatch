import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
background-color:${props => (props.mode === true ? '#1e293b' : ' #f1f5f9')};
min-height:120vh;
overflow:auto;
@media screen and (min-width:768px){
    display:flex;
    width:;
}
`
export const NoSavedHeading = styled.h1`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-size:30px;
`

export const NosavedDesc = styled.p`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-size:24px;
text-align:center;
`
export const VideosContainer = styled.div`
min-height:120vh;
overflow:auto;
`

export const ImageCon = styled.div`
background-color:${props => (props.mode === false ? '#e2e8f0' : '#181818')};
border-radius:50%;
height:60px;
width:60px;
display:flex;
justify-content:center;
align-items:center;
margin:20px;
@media screen and (min-width:768px){
    height:80px;
    width:80px;
    margin-left:60px;
}
`

export const TopContainer = styled.div`
display:flex;
align-items:center;
background-color:${props => (props.mode === false ? '#cbd5e1' : '#383838')};
margin:0px;
width:100vw;
@media screen and (min-width:768px){
    width:83vw;
}
`

export const SavedText = styled.h2`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-size:24px;
@media screen and (min-width:768px){
    font-size:28px;
}
`
export const BottomContainer = styled.ul`
height:120vh;
overflow:auto;
@media screen and (max-width:568px){
    padding-left:0px;
}
@media screen and (min-width:768px){
    width:83vw;
}
`

export const VideoItem = styled.li`
list-style-type:none;
width:100%;
@media screen and (min-width:568px){
    display:flex;
    justify-content:space-around;
    margin-bottom:30px;
}

`
export const DescriptionsmContainer = styled.div`
display:flex;
justify-content:space-around;
@media screen and (min-width:568px){
    display:none;
}
`

export const TextContainer = styled.div``

export const DText = styled.h2`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-size:18px;
margin-bottom:0px;
@media screen and (min-width:568px){
    font-size:24px;
    line-spacing:2px;
}
`
export const DetailsContainer = styled.div`
display:flex;
align-items:center;
width:80%;
justify-content:space-between;
margin-top:0px;

`
export const DescriptionlgContainer = styled.div`
@media screen and (max-width:568px){
    display:none;
}
`
