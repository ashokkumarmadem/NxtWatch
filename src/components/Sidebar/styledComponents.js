import styled from 'styled-components'

export const RouteListContainer = styled.li`
list-style-type:none;
display:flex;
align-items:center;
font-family:'Roboto';
`
export const Icon = styled.div`
color:${props => (props.selection === true ? '#ff0b37' : ' #606060')};
margin-right:10px;
`

export const NavigationText = styled.p`
font-family:'Roboto';
color:${props => (props.mode === true ? '#e2e8f0' : 'black')};
font-weight:${props => (props.selection === true ? 600 : 400)};
font-size:16px;
`
export const RouteDesktopContainer = styled.div`
background-color:${props => (props.mode === false ? '#f9f9f9' : '#0f0f0f')};
width:17vw;
margin-top:0px;
margin-bottom:0px;
padding-top:30px;
padding-left:20px;
min-height:120vh;
overflow-y:auto;
display:flex;
flex-direction:column;
justify-content:space-between;
@media screen and (max-width:767px){
    display:none;
}
`
export const FooterContainer = styled.div``

export const FooterHeading = styled.h3`
font-size:20px;
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
`
export const FooIconsContainer = styled.div``

export const FooImg = styled.img`
height:30px;
width:30px;
margin-right:12px;
`

export const FooDesc = styled.p`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-weight:500;
font-size:18px;
`
