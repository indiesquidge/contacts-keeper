import React, { Component } from 'react';
import NewContactModal from './NewContactModal';
import ContactTable from './ContactTable';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.addContact = this.addContact.bind(this)
    this.state = {
      contacts: {}
    }
  }

  addContact(contact) {
    const contacts = {...this.state.contacts}
    contacts[`contact-${Date.now()}`] = contact
    this.setState({ contacts })
  }

  render() {
    return (
      <div className="App">
        <h1 className="app-header">Contacts Keeper</h1>
        <NewContactModal addContact={this.addContact} />
        <ContactTable contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
