import styled from 'styled-components'

export const GamingVideoContainer = styled.div`
background-color:${props => (props.mode === true ? '#1e293b' : ' #f1f5f9')};
min-height:120vh;
overflow:auto;
@media screen and (max-width:768px){
    width:100vw;
}
width:83vw;
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
export const SavedText = styled.h2`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-size:24px;
@media screen and (min-width:768px){
    font-size:28px;
}
`
export const TopHContainer = styled.div``

export const GamingContainer = styled.div``

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
export const BottomContainer = styled.ul`
height:120vh;
overflow-y:scroll;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
@media screen and (max-width:568px){
    padding:0px;
    justify-content:space-between;
    padding:10px;
}
`

export const EachVideoItem = styled.li`
list-style-type:none;
margin-bottom:10px;
@media screen and (min-width:568px) and (max-width:768px){
    
}
`

export const GamingTitle = styled.p`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-size:15px;
font-weight:600;
margin-bottom:5px;
`

export const ViewCount = styled(GamingTitle)`
line-spacing:4px;
margin-top:0px;
font-size:12px;
width:60%;
font-weight:normal;
`
export const FailureText = styled.p`
font-family:'Roboto';
color:${props => (props.mode === false ? 'black' : 'white')};
font-size:20px;
font-weight:600;
`

export const FailureDesc = styled(FailureText)`
font-weight:350;
font-size:14px;
`