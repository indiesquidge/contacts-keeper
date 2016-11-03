import React from 'react'
import Contact from './Contact'
import '../css/ContactTable.css'

const ContactTable = ({ contacts }) => (
  <table className="contact-table">
    <thead>
      <tr>
        <th className="first-name">First Name</th>
        <th className="last-name">Last Name</th>
        <th className="dob">Date of Birth</th>
        <th className="phone">Phone</th>
        <th className="email">Email</th>
        <th className="notes">Notes</th>
      </tr>
    </thead>
    <tbody>
      { Object.keys(contacts).map(key => (
        <Contact key={key} details={contacts[key]} />
      ))}
    </tbody>
  </table>
)

ContactTable.propTypes = {
  contacts: React.PropTypes.object
}

export default ContactTable;
