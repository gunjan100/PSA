import React, { useState, useEffect } from 'react';

const AdminPanel = ({ isAdmin }) => {
  const [clients, setClients] = useState([]); // Client list
  const [searchInput, setSearchInput] = useState(''); // Input for certificate number
  const [searchResult, setSearchResult] = useState([]); // Filtered search result
  const [newClientData, setNewClientData] = useState({
    name: '',
    certificateNo: '',
    // Add other properties for a new client here...
  });
  const [showAddClientForm, setShowAddClientForm] = useState(false);

  // Mock client data - replace this with your actual API call
  const mockClientData = [
    { id: 1, name: 'Client 1', certificateNo: '12345', /* Other client details */ },
    { id: 2, name: 'Client 2', certificateNo: '54321', /* Other client details */ },
    // Add more client objects here...
  ];

  useEffect(() => {
    // Simulate fetching data from an API
    // In a real scenario, replace this with your API call to fetch client data
    setClients(mockClientData);
  }, []);

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);

    // Filter clients based on certificate number
    const filteredClients = clients.filter(
      (client) =>
        client.certificateNo.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResult(filteredClients);
  };

  const handleUpdateClient = (clientId, updatedDetails) => {
    const updatedClientList = clients.map((client) =>
      client.id === clientId ? { ...client, ...updatedDetails } : client
    );
    setClients(updatedClientList);

    if (searchInput !== '') {
      const filteredClients = updatedClientList.filter(
        (client) =>
          client.certificateNo.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResult(filteredClients);
    }
  };

  const handleAddClientInputChange = (e) => {
    const { name, value } = e.target;
    setNewClientData({
      ...newClientData,
      [name]: value,
    });
  };

  const handleAddClientSubmit = (e) => {
    e.preventDefault();
    if (isAdmin) {
      const newClient = {
        id: clients.length + 1,
        ...newClientData,
      };
      setClients([...clients, newClient]);
      setNewClientData({
        name: '',
        certificateNo: '',
        // Reset other new client data fields here...
      });
      setShowAddClientForm(false);
    } else {
      alert('You are not authorized to add a new client.');
    }
  };

  const handleDeleteClient = (clientId) => {
    const updatedClients = clients.filter((client) => client.id !== clientId);
    setClients(updatedClients);

    if (searchInput !== '') {
      const filteredClients = updatedClients.filter(
        (client) =>
          client.certificateNo.toLowerCase().includes(searchInput.toLowerCase())
      );
      setSearchResult(filteredClients);
    }
  };

  return (
    <div>
      <h1>Admin Panel</h1>
      <button onClick={() => setShowAddClientForm(true)}>Add New Client</button>
      {showAddClientForm && isAdmin && (
        <form onSubmit={handleAddClientSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={newClientData.name}
            onChange={handleAddClientInputChange}
          />
          <input
            type="text"
            placeholder="Certificate Number"
            name="certificateNo"
            value={newClientData.certificateNo}
            onChange={handleAddClientInputChange}
          />
          {/* Add other input fields for new client details */}
          <button type="submit">Add</button>
        </form>
      )}
      <input
        type="text"
        placeholder="Enter Certificate Number"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <div>
        {searchResult.length > 0 ? (
          <ul>
            {searchResult.map((client) => (
              <li key={client.id}>
                <p>Name: {client.name}</p>
                <p>Certificate No: {client.certificateNo}</p>
                <button onClick={() => handleUpdateClient(client.id, /* Updated details */)}>
                  Update
                </button>
                <button onClick={() => handleDeleteClient(client.id)}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No matching clients found.</p>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
