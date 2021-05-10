import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navBar/NavigationBar';
import Home from './containers/home/Home';
import Progress from './containers/progress/Progress';
import Members from './containers/members/Members';
import Concept from './containers/concept/Concept';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className='appContainer'>
      <NavigationBar />
      <div style={{ flexGrow: 1, marginTop: 25 }}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/progress' component={Progress} />
            <Route path='/members' component={Members} />
            <Route path='/images' component={Concept} />
          </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;