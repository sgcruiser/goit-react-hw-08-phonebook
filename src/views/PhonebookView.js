import React, { Component } from 'react';
// import { connect } from 'react-redux';
import Container from '../components/Container';
import Phonebook from '../components/Phonebook';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';

class PhonebookView extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Phonebook />
      </Container>
    );
  }
}

export default PhonebookView;
