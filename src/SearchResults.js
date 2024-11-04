
import React, { useState } from 'react';
import './SearchResults.css';

function SearchResults({ contacts, onContactClick }) {
    // State to keep track of the current sort configuration (key and direction)
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });

    // Function to sort contacts based on the current sort configuration
    const sortedContacts = [...contacts].sort((a, b) => {
        if (sortConfig.key) { // Only sort if a key is defined
            // Get the values for the sort key from each contact object
            const aValue = sortConfig.key.split('.').reduce((obj, key) => obj[key], a);
            const bValue = sortConfig.key.split('.').reduce((obj, key) => obj[key], b);
            
            // Compare the values and return based on the sort direction
            if (aValue < bValue) {
                return sortConfig.direction === 'asc' ? -1 : 1; // Ascending or descending
            }
            if (aValue > bValue) {
                return sortConfig.direction === 'asc' ? 1 : -1;
            }
        }
        return 0; // Return 0 if values are equal or no key is set
    });

    // Function to handle sorting when a column header is clicked
    const handleSort = (key) => {
        let direction = 'asc'; // Default direction is ascending
        // If the current key is already sorted in ascending, switch to descending
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        // Update the sort configuration with the new key and direction
        setSortConfig({ key, direction });
    };

    // Render the table if there are contacts; otherwise, show a 'No results' message
    return contacts.length > 0 ? (
        <table className="contacts-table">
            <thead>
                <tr>
                    {/* Column headers with sorting capability */}
                    <th onClick={() => handleSort('name')}>Name {sortConfig.key === 'name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲▼'}</th>
                    <th onClick={() => handleSort('username')}>Username {sortConfig.key === 'username' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲▼'}</th>
                    <th onClick={() => handleSort('email')}>Email {sortConfig.key === 'email' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲▼'}</th>
                    <th onClick={() => handleSort('phone')}>Phone {sortConfig.key === 'phone' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲▼'}</th>
                    <th onClick={() => handleSort('company.name')}>Company {sortConfig.key === 'company.name' ? (sortConfig.direction === 'asc' ? '▲' : '▼') : '▲▼'}</th>
                </tr>
            </thead>
            <tbody>
                {/* Map through sorted contacts and display each in a row */}
                {sortedContacts.map(contact => (
                    <tr key={contact.id}>
                        {/* Clicking the name triggers the onContactClick function to display details */}
                        <td><a href="#" onClick={() => onContactClick(contact)}>{contact.name}</a></td>
                        <td>{contact.username}</td>
                        <td>{contact.email}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.company.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        // Display this message if no contacts are available
        <p className="no-results">No results found.</p>
    );
}

export default SearchResults;