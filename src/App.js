import React from 'react'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import { Switch, Route } from 'react-router-dom'
import Header from './components/header/header.component.jsx'
import Sign from './pages/sign/sign.component.jsx'
import { auth } from './firebase/firebase.utils'
import Rough from "./pages/rough/Rough"
// function HatsPage() {
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   )
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })
      console.log(user)
    })
}

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={Shop} />
          <Route exact path='/signin' component={Sign} />
          <Route exact path='/contract' component={Rough} />
        </Switch>


      </div>
    );
  }
}
export default App;
