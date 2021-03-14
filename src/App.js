import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavigationBar from './components/navBar/NavigationBar';
import Container from 'react-bootstrap/Container';
import Footer from './components/footer/Footer';
import Project from './containers/project/Project';
import Members from './containers/members/Members';

import './App.css';

const App = () => {
  return (
    <div>
      <NavigationBar test={"This is a fucking prop!"} />
      <Container>
        <div style={{marginTop: 25}}>
          <Switch>
            <Route path='/' exact component={Footer} />
            <Route path='/project' component={Project} />
            <Route path='/members' component={Members} />
          </Switch>
        </div>
      </Container>
    </div>
  );
}

export default App;