import React, { useState } from 'react';
import './ElaqeyeOptions.css'; // Ensure this CSS file is created
import { MdMoreHoriz } from 'react-icons/md';

const ElaqeyeOptions = () => {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [showOptionsMenu, setShowOptionsMenu] = useState(null);

  const handleViewMessage = (id) => {
    setSelectedContactId(id);
    setShowOptionsMenu(null);
  };

  const handleDeleteMessage = (id) => {
    console.log(`Deleting contact with id: ${id}`);
    // Implement delete functionality here
    setShowOptionsMenu(null);
    setSelectedContactId(null); // Hide the message detail view
  };

  const handleBack = () => {
    setSelectedContactId(null);
  };

  const mockContacts = [
    { id: 1, companyName: 'Toyota', subject: 'Request for Information', email: 'contact@toyota.com', message: 'Interested in your latest car models.' },
    { id: 2, companyName: 'Honda', subject: 'Partnership Inquiry', email: 'partnership@honda.com', message: 'Would like to discuss partnership opportunities.' },
    // Add more mock data as needed
  ];

  return (
    <div className="elaqeye-options">
      <h2>Əlaqə Listəsi</h2>
      {selectedContactId === null ? (
        <div className="contact-table">
          <div className="contact-header">
            <div className='contactcompanyName'>Sirketin Adi</div>
            <div className='contactsubject'>Sirketin Movzusu</div>
            <div className='contactemail'>Email</div>
            <div className='contactmessage'>Mesaj</div>
            <div className="optionselaqe">Options</div>
          </div>
          {mockContacts.map(contact => (
            <div key={contact.id} className="contact-row">
              <div className='contactcompanyName'>{contact.companyName}</div>
              <div className='contactsubject'>{contact.subject}</div>
              <div className='contactemail'>{contact.email}</div>
              <div className='contactmessage'>{contact.message.length > 50 ? `${contact.message.substring(0, 50)}...` : contact.message}</div>
              <div className="optionselaqe">
                <MdMoreHoriz
                  className="more-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowOptionsMenu(showOptionsMenu === contact.id ? null : contact.id);
                  }}
                />
                {showOptionsMenu === contact.id && (
                  <div className="options-menu">
                    <button
                      className="view-message-button"
                      onClick={() => handleViewMessage(contact.id)}
                    >
                      Mesaja Ferdi Bax
                    </button>
                    <button
                      className="delete-button-elaqe"
                      onClick={() => handleDeleteMessage(contact.id)}
                    >
                      Sil
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="contact-detail">
          {mockContacts.filter(contact => contact.id === selectedContactId).map(contact => (
            <div key={contact.id} className="contact-detail-content">
              <h3>{contact.companyName}</h3>
              <p><strong>Subject:</strong> {contact.subject}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <button
                className="back-button"
                onClick={handleBack}
              >
                Geri
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteMessage(contact.id)}
              >
                Sil
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ElaqeyeOptions;
