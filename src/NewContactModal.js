import React, { Component } from 'react';
import Modal from './Modal';
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
      <div className="App">
        <button onClick={() => this.openModal()}>+ Contacts Keeper</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <div className="modal-header">
            <h3>Contacts Keeper</h3>
            <span onClick={() => this.closeModal()}>x</span>
          </div>
          <form className="modal-body">
            <fieldset className="form-item first-name">
              <label htmlFor="new-first-name">First Name</label>
              <input id="new-first-name" type="text" />
            </fieldset>
            <fieldset className="form-item last-name">
              <label htmlFor="new-last-name">Last Name</label>
              <input id="new-last-name" type="text" />
            </fieldset>
            <fieldset className="form-item dob">
              <label htmlFor="new-dob">Date of Birth</label>
              <input id="new-dob" type="date" />
            </fieldset>
            <fieldset className="form-item phone">
              <label htmlFor="new-phone-number">Phone Number</label>
              <input id="new-phone-number" type="tel" />
            </fieldset>
            <fieldset className="form-item email">
              <label htmlFor="new-email">Email</label>
              <input id="new-email" type="email" />
            </fieldset>
            <fieldset className="form-item notes">
              <label htmlFor="new-notes">Notes</label>
              <textarea id="new-notes" name="notes" rows="5"></textarea>
            </fieldset>
          </form>
          <div className="modal-footer">
            <button className="save-contact">Save</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default NewContactModal;
