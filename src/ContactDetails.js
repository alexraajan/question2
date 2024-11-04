import React from 'react'; // Import React to create the component
import './ContactDetails.css'; // Import CSS for styling the component

// Functional component to display detailed information of a contact
function ContactDetails({ contact, onClose }) {
    return (
        <div className="contact-popup"> {/* Popup container for displaying contact details */}
            <div className="popup-content"> {/* Container for popup content */}
                {/* Button to close the contact details popup */}
                <button className="close-button" onClick={onClose}>Close</button>
                <h2>Contact Details</h2> {/* Heading for the contact details */}
                <table className="details-table"> {/* Table to display contact details in a structured format */}
                    <thead>
                        <tr>
                            <th>Field</th> {/* Table column header for field names */}
                            <th>Details</th> {/* Table column header for field values */}
                        </tr>
                    </thead>
                    <tbody>
                        {/* Display contact ID */}
                        <tr>
                            <td><strong>ID</strong></td>
                            <td>{contact.id}</td>
                        </tr>
                        {/* Display contact name */}
                        <tr>
                            <td><strong>Name</strong></td>
                            <td>{contact.name}</td>
                        </tr>
                        {/* Display contact username */}
                        <tr>
                            <td><strong>Username</strong></td>
                            <td>{contact.username}</td>
                        </tr>
                        {/* Display contact email */}
                        <tr>
                            <td><strong>Email</strong></td>
                            <td>{contact.email}</td>
                        </tr>
                        {/* Display contact address as a single formatted field */}
                        <tr>
                            <td><strong>Address</strong></td>
                            <td>{`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}, ${contact.address.zipcode}`}</td>
                        </tr>
                        {/* Display latitude and longitude */}
                        <tr>
                            <td><strong>Latitude & Longitude</strong></td>
                            <td>{`${contact.address.geo.lat}, ${contact.address.geo.lng}`}</td>
                        </tr>
                        {/* Display contact phone number */}
                        <tr>
                            <td><strong>Phone Number</strong></td>
                            <td>{contact.phone}</td>
                        </tr>
                        {/* Display contact website */}
                        <tr>
                            <td><strong>Website</strong></td>
                            <td>{contact.website}</td>
                        </tr>
                        {/* Display company name */}
                        <tr>
                            <td><strong>Company Name</strong></td>
                            <td>{contact.company.name}</td>
                        </tr>
                        {/* Display company catchphrase */}
                        <tr>
                            <td><strong>Company CatchPhrase</strong></td>
                            <td>{contact.company.catchPhrase}</td>
                        </tr>
                        {/* Display company BS */}
                        <tr>
                            <td><strong>Company BS</strong></td>
                            <td>{contact.company.bs}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactDetails; // Export the component for use in other parts of the application
