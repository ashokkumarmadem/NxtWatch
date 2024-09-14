import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props => (props.mode === false ? '#f9f9f9' : '#0f0f0f')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 568px) {
    padding: 12px;
  }
`

export const LoginCardContainer = styled.form`
  background-color: ${props => (props.mode === false ? '#f8fafc' : '#1e293b')};
  min-height: 300px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
`
export const Image = styled.img`
  height: 35px;
  width: 150px;
  @media screen and (max-width: 568px) {
    height: 25px;
    width: 120px;
  }
  margin-left: 25%;
  margin-bottom: 20px;
`

export const InputContainer = styled.div`
  margin-bottom: 14px;
`

export const LabelEl = styled.label`
  display: block;
  color: ${props => (props.mode === true ? 'white' : 'black')};
  font-family: 'Roboto';
  font-size: 12px;
  margin-bottom: 5px;
  font-weight: 600;
`
export const InputEl = styled.input`
  width: 300px;
  height: 30px;
  font-family: 'Roboto';
  background-color: transparent;
  border-width: 1px;
  border-color: ${props => (props.mode === true ? '#f8fafc' : '#1e293b')};
  background-color: ${props => (props.mode === false ? '#f8fafc' : '#1e293b')};
  outline: none;
  padding-left: 8px;
`
export const CheckboxEl = styled.input``
export const Text = styled.p`
  display: inline;
  color: ${props => (props.mode === true ? 'white' : 'black')};
  margin: 0px;
  font-family: 'Roboto';
`
export const LoginBtn = styled.button`
  display: block;
  width: 300px;
  height: 30px;
  border-radius: 6px;
  background-color: #3b82f6;
  color: white;
  cursor: pointer;
  outline: none;
  border: none;
  font-family: 'Roboto';
  font-weight: 500;
`
export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`
export const Error = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  color: red;
`
