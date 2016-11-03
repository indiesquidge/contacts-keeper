import React from 'react'
import Contact from './Contact'

class ContactTable extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          { Object.keys(this.props.contacts).map(key => (
            <Contact key={key} details={this.props.contacts[key]} />
          ))}
        </tbody>
      </table>
    )
  }
}

ContactTable.propTypes = {
  contacts: React.PropTypes.object
}

export default ContactTable;
