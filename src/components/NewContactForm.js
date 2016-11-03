import React from 'react'
import '../css/NewContactForm.css'

const NewContactForm = ({ addContact, closeModal }) => {
  let contactForm, firstName, lastName, dob, phone, email, notes

  const createContact = (e) => {
    e.preventDefault()

    const contact = {
      firstName: firstName.value,
      lastName: lastName.value,
      dob: dob.value,
      phone: phone.value,
      email: email.value,
      notes: notes.value
    }

    contactForm.reset()
    addContact(contact)
    closeModal()
  }

  return (
    <form
      ref={input => contactForm = input}
      onSubmit={e => createContact(e)}
      className="contact-form">
      <fieldset className="form-item first-name">
        <label htmlFor="new-first-name">First Name</label>
        <input ref={input => firstName = input} id="new-first-name" type="text" required />
      </fieldset>
      <fieldset className="form-item last-name">
        <label htmlFor="new-last-name">Last Name</label>
        <input ref={input => lastName = input} id="new-last-name" type="text" />
      </fieldset>
      <fieldset className="form-item dob">
        <label htmlFor="new-dob">Date of Birth</label>
        <input ref={input => dob = input} id="new-dob" type="date" />
      </fieldset>
      <fieldset className="form-item phone">
        <label htmlFor="new-phone-number">Phone Number</label>
        <input ref={input => phone = input} id="new-phone-number" type="tel" />
      </fieldset>
      <fieldset className="form-item email">
        <label htmlFor="new-email">Email</label>
        <input ref={input => email = input} id="new-email" type="email" />
      </fieldset>
      <fieldset className="form-item notes">
        <label htmlFor="new-notes">Notes</label>
        <textarea ref={input => notes = input} id="new-notes" name="notes" rows="5" />
      </fieldset>
      <button type="submit" className="save-contact">Save</button>
    </form>
  )
}

NewContactForm.propTypes = {
  addContact: React.PropTypes.func
}

export default NewContactForm
