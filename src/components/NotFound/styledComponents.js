import styled from 'styled-components'

export const NotFoundContainer = styled.div`
background-color:${props => (props.mode === true ? '#1e293b' : ' #f1f5f9')};
height:120vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (min-width:768px){
    width:83vw;
}
`
export const NotFoundText = styled.p`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-size:20px;
font-weight:600;
text-align:center
`

export const NotFoundDesc = styled.p`
font-family:'Roboto';
color:${props => (props.mode === true ? 'white' : 'black')};
font-size:16px;
text-align:center
`
