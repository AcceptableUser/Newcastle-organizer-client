import React from "react"
import './App.scss';
import { LogIn } from "./log-in/log-in.component"
import { SignIn } from "./sign-in/sign-in.component"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogginActive: true
    }
  }

  changeLoginState = () => {
    const { isLogginActive } = this.state
    if (isLogginActive) {
      this.setState({isLogginActive: false})
    } else {
      this.setState({isLogginActive: true})
    }
  }

  render() {
    const {isLogginActive} = this.state
    return (
      <div className="App">
        <main>
          {isLogginActive && <LogIn changeLoginState={this.changeLoginState} />}
          {!isLogginActive && <SignIn changeLoginState={this.changeLoginState}/>}
        </main>
      </div>
    );
  }
}

export default App;
