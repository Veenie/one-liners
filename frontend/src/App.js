// import logo from './logo.svg';
import './App.css';
import React from 'react'
// import {connect} from 'react-redux'
// import { fetchPosts } from './actions/fetchPosts';
import PostsContainer from './containers/PostsContainer'
import {Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/NavBar'
import Links from './components/Links'
class App extends React.Component {
  
  
  // componentDidMount() {
  //   fetch('http://localhost:3001/posts', {method: 'GET'})
  //   .then(response => response.json())
  //   .then(data => console.log(data))
  // }
  //testing out backend/frontend connection


  render () {
    return (
    <div className="App">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/posts" component={PostsContainer} />
      <Route exact path="/links" component={Links} />
    </div>
  );
}

}

export default App;

//setting navbar here at top so it is available everywhere
//setting our routes
