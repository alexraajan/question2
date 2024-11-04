// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchResults from './SearchResults';
import ContactDetails from './ContactDetails';

function App() {
    // State to store contacts fetched from the API
    const [contacts, setContacts] = useState([]);
    // States to store user input for search fields
    const [searchName, setSearchName] = useState('');
    const [searchEmail, setSearchEmail] = useState('');
    const [searchUsername, setSearchUsername] = useState('');
    const [searchCompanyName, setSearchCompanyName] = useState('');
    // State to store the filtered contacts based on search input
    const [filteredContacts, setFilteredContacts] = useState([]);
    // State to store the selected contact for displaying details
    const [selectedContact, setSelectedContact] = useState(null);

    // Effect hook to fetch contacts data when the component mounts
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json()) // Parse the response as JSON
            .then(data => setContacts(data)) // Set the contacts state with fetched data
            .catch(error => console.error('Error fetching contacts:', error)); // Log any errors
    }, []);

    // Function to handle the search button click
    const handleSearchClick = () => {
        // Check if all search fields are empty; if so, clear filtered contacts
        if (!searchName && !searchEmail && !searchUsername && !searchCompanyName) {
            setFilteredContacts([]);
            return;
        }
        // Filter contacts based on user input
        const results = contacts.filter(contact =>
            contact.name.toLowerCase().includes(searchName.toLowerCase()) &&
            contact.email.toLowerCase().includes(searchEmail.toLowerCase()) &&
            contact.username.toLowerCase().includes(searchUsername.toLowerCase()) &&
            contact.company.name.toLowerCase().includes(searchCompanyName.toLowerCase())
        );
        setFilteredContacts(results); // Update the filtered contacts state
    };

    // Function to handle when a contact is clicked for details
    const handleContactClick = (contact) => {
        setSelectedContact(contact); // Set the selected contact state
    };

    // Function to close the contact details popup
    const closeContactDetails = () => {
        setSelectedContact(null); // Reset the selected contact state
    };

    return (
        <div className="App">
            <h1>Search Contacts</h1>
            {/* Container for search input fields */}
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    className="search-box"
                />
                <input
                    type="text"
                    placeholder="Search by email"
                    value={searchEmail}
                    onChange={(e) => setSearchEmail(e.target.value)}
                    className="search-box"
                />
                <input
                    type="text"
                    placeholder="Search by username"
                    value={searchUsername}
                    onChange={(e) => setSearchUsername(e.target.value)}
                    className="search-box"
                />
                <input
                    type="text"
                    placeholder="Search by company name"
                    value={searchCompanyName}
                    onChange={(e) => setSearchCompanyName(e.target.value)}
                    className="search-box"
                />
                {/* Container for action buttons */}
                <div className="button-container">
                    <button onClick={handleSearchClick} className="search-button">
                        {/* Search button with an icon */}
                        <i className="fas fa-search"></i> Search
                    </button>
                    <button onClick={() => setFilteredContacts(contacts)} className="search-button">
                        List All Users
                    </button>
                    <button onClick={() => {
                        // Clear all search fields and filtered contacts
                        setSearchName('');
                        setSearchEmail('');
                        setSearchUsername('');
                        setSearchCompanyName('');
                        setFilteredContacts([]);
                    }} className="clear-button">
                        Clear
                    </button>
                </div>
            </div>
            {/* Component to display search results */}
            <SearchResults contacts={filteredContacts} onContactClick={handleContactClick} />
            {/* Component to display contact details in a popup if a contact is selected */}
            {selectedContact && <ContactDetails contact={selectedContact} onClose={closeContactDetails} />}
        </div>
    );
}

export default App;
