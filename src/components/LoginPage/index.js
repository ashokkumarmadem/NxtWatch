import {Component} from 'react'
import Cookies from 'js-cookie'
import AppContext from '../../context/NxtWatch'
import {
  LoginContainer,
  LoginCardContainer,
  Image,
  InputContainer,
  LabelEl,
  InputEl,
  CheckboxEl,
  Text,
  LoginBtn,
  CheckboxContainer,
  Error,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    isChecked: false,
    username: '',
    password: '',
    showError: false,
    errorMsg: '',
  }

  getType = () => {
    const {isChecked} = this.state
    if (isChecked === false) {
      return 'password'
    }
      return 'text'
    
  }

  onChangeType = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  submitData = async event => {
    const {username, password} = this.state
    event.preventDefault()
    if (username !== '' && password !== '') {
      const userDetails = {username, password}
      const api = 'https://apis.ccbp.in/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(userDetails),
      }
      const response = await fetch(api, options)
      const data = await response.json()
      if (response.ok === true) {
        const token = data.jwt_token
        Cookies.set('jwt_token', token, {expires: 30})
        const {history} = this.props
        history.push('/')
      } else {
        this.setState({errorMsg: data.error_msg, showError: true})
      }
    }
  }

  render() {
    const {username, password, errorMsg, showError} = this.state
    return (
      <AppContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const logourl = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginContainer mode={isDarkMode}>
              <LoginCardContainer mode={isDarkMode} onSubmit={this.submitData}>
                <div>
                  <Image src={logourl} alt="logo-img" />
                  <InputContainer>
                    <LabelEl htmlFor="name" mode={isDarkMode}>
                      USERNAME
                    </LabelEl>
                    <InputEl
                      id="name"
                      placeholder="Username: rahul"
                      mode={isDarkMode}
                      type="text"
                      onChange={this.onChangeUsername}
                      value={username}
                    />
                  </InputContainer>
                  <InputContainer>
                    <LabelEl htmlFor="password" mode={isDarkMode}>
                      PASSWORD
                    </LabelEl>
                    <InputEl
                      mode={isDarkMode}
                      id="password"
                      placeholder="Password: rahul@2021"
                      type={this.getType()}
                      onChange={this.onChangePassword}
                      value={password}
                    />
                  </InputContainer>
                  <CheckboxContainer>
                    <CheckboxEl
                      id="box"
                      type="checkbox"
                      onChange={this.onChangeType}
                    />
                    <Text mode={isDarkMode} htmlFor="box">
                      Show Password
                    </Text>
                  </CheckboxContainer>
                  <LoginBtn>Login</LoginBtn>
                  {showError ? <Error>* {errorMsg}</Error> : ''}
                </div>
              </LoginCardContainer>
            </LoginContainer>
          )
        }}
      </AppContext.Consumer>
    )
  }
}

export default LoginPage
