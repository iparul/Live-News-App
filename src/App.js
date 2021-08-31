import React, { Component } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';


class App extends Component {
  pageSize = 5;

  state ={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
         <Router>
           <NavBar />
           <LoadingBar
           height = {3}
        color='#f11946'
        progress={this.state.progress}
       
      />
           <Switch>
               <Route exact path="/"> <News setProgress={this.setProgress} key="General" pageSize={6} country="in" category="General"/></Route>
               <Route exact path="/General"> <News setProgress={this.setProgress}  key="General" pageSize={6} country="in" category="General"/></Route>
               <Route exact path="/Business"> <News setProgress={this.setProgress}  key="Business" pageSize={6} country="in" category="Business"/></Route>
               <Route exact path="/Entertainment"> <News setProgress={this.setProgress}  key="Entertainment" pageSize={6} country="in" category="Entertainment"/></Route>
               <Route exact path="/Health"> <News setProgress={this.setProgress}  key="Health" pageSize={6} country="in" category="Health"/></Route>
               <Route exact path="/Science"> <News setProgress={this.setProgress}  key="Science" pageSize={6} country="in" category="Science"/></Route>
               <Route exact path="/Technology"> <News setProgress={this.setProgress}  key="Technology" pageSize={6} country="in" category="Technology"/></Route>
               <Route exact path="/Sports"> <News setProgress={this.setProgress}  key="Sports" pageSize={6} country="in" category="Sports"/></Route>
           </Switch>
        </Router>
      </div>
    )
  }
}


export default App;
