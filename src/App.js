import React, { Component } from "react";
import { Route } from "react-router-dom";
import PageAversion2 from "./PageAversion2";
import PageBversion2 from "./PageBversion2";
import UserScreen from "./UserScreen";
import History from './History';
import News from './News';
class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact={true} component={PageAversion2} />
        <Route path="/PageAversion2" exact={true} component={PageAversion2} />
        <Route path="/navuser" component={UserScreen} />
        <Route path="/process" exact={true} component={PageBversion2} />
        <Route path="/History"  exact ={true} component={History}/> 
        <Route path="/PageBversion2" exact={true} component={PageBversion2} />
        <Route path="/News"  exact ={true} component={News}/> 
      </div>
    );
  }
}
export default App;
