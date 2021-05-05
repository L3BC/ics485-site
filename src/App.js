import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navBar/NavigationBar';
import Container from 'react-bootstrap/Container';
import Home from './containers/home/Home';
import Project from './containers/project/Project';
import Members from './containers/members/Members';
import Footer from './components/footer/Footer';

import './App.css';

const App = () => {
  return (
    <div className='appContainer'>
      <NavigationBar/>
      <Container style={{flexGrow: 1}}>
        <div style={{marginTop: 25}}>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/project' component={Project} />
            <Route path='/members' component={Members} />
          </Switch>
        </div>
      </Container>
      <Footer/>
    </div>
  );
}

export default App;