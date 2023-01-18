import React from 'react'

const ListContacts = ({ contacts, onDeleteContact }) => {

  return (
    <ol className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
          <div className="contact-avatar" style={{
            backgroundImage: `url(${contact.avatarURL})`
          }} />
          <div className="contact-details">
            <p>{contact.name}</p>
            <p>{contact.handle}</p>
          </div>
          <button onClick={() => onDeleteContact(contact)} className="contact-remove">
            Remove
          </button>
        </li>
      ))}
      </ol>
  )
}

export default ListContacts