import React from 'react'

const Contact = ({ details }) => (
  <tr>
    <td>{details.firstName}</td>
    <td>{details.lastName}</td>
    <td>{details.dob}</td>
    <td>{details.phone}</td>
    <td>{details.email}</td>
    <td>{details.notes}</td>
  </tr>
)

Contact.propTypes = {
  details: React.PropTypes.object
}

export default Contact;
