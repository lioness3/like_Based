import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import RedditDisplay from './RedditDisplay';
import Error404 from './Error404';
import './App.css';
import PostForm from './PostForm';
import PropTypes from 'prop-types';

class App extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      masterRedditDisplay: []
    };
      this.handleAddNewPost =
      this.handleAddNewPost.bind(this);
  }

  handleAddNewPost(newPost){
    let newMasterRedditDisplay = this.state.masterRedditDisplay.slice();
    newMasterRedditDisplay.push(newPost);
    this.setState({masterRedditDisplay: newMasterRedditDisplay});
  }

render(){
    return (
      <div>
        <Header />
        <Switch>
        <Route exact path='/' render={()=><RedditDisplay  redditdisplay={this.state.masterRedditDisplay}/>} />
        <Route  path='/new' render={()=><PostForm onNewPost={this.handleAddNewPost} />} />
        <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
