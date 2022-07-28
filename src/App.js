import React, { component } from 'react';
import {hymns} from './hymns';
import Nav from './Nav';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HymnList from './HymnList';
import Scroll from './Scroll';
import hymnpage from './hymnpage';
import Content from './Content';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            hymns: hymns,
            searchfield: ''
        }
    }
     
    render() {

  return (
    <>
      <Router>
      <Nav />
      <Routes>
      <Route path='/' exact component={Content}/>
      </Routes>
      <Scroll>
      <HymnList hymns={this.state.hymns}/>
      </Scroll>
      <Routes>
      <Route path='/:id' component={hymnpage}/>
      </Routes>
      </Router>
    </>
  );
}
    
}  
                                 
export default App;

