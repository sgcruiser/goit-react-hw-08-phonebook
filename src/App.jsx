import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from './components/Container';
import AppBar from './components/AppBar';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import PhonebookView from './views/PhonebookView';

import { authOperations } from './redux/auth';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/todos" component={PhonebookView} />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onGetCurretnUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
