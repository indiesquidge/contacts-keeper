import React, { Component } from 'react';
import Modal from './Modal';
import NewContactForm from './NewContactForm';
import './NewContactModal.css';

class NewContactModal extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  openModal() {
    this.setState({ isModalOpen: true })
  }

  closeModal() {
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <div className="contact-modal">
        <button className="open-modal" onClick={() => this.openModal()}>
          <span className="plus-icon">+</span> Contacts Keeper
        </button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <div className="modal-header">
            <h3>Contacts Keeper</h3>
            <span className="close" onClick={() => this.closeModal()}>x</span>
          </div>
          <div className="modal-body">
            <NewContactForm addContact={this.props.addContact} />
          </div>
        </Modal>
      </div>
    );
  }
}

NewContactModal.propTypes = {
  addContact: React.PropTypes.func
}

export default NewContactModal;
