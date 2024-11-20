import React, { useState, useEffect } from 'react';
import UserForm from './components/UserFrom';
import UserList from './components/UserList';
import ErrorBoundary from './components/ErrorBoundary';
import { fetchUsers, updateUser, addUser, deleteUser } from './server/App'
import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    fetchUsers()
      .then(response => setUsers(response.data))
      .catch(() => alert('Failed to fetch users.'));
  }, []);

  const handleSave = (user) => {
    if (user.id) {
      // Update existing user
      updateUser(user.id, user)
        .then(response => {
          setUsers(users.map(u => (u.id === user.id ? response.data : u)));
          setEditingUser(null);
        })
        .catch(() => alert('Failed to update user.'));
    } else {
      // Add new user
      addUser(user)
        .then(response => setUsers([...users, response.data]))
        .catch(() => alert('Failed to add user.'));
    }
  };

  const handleDelete = (id) => {
    deleteUser(id)
      .then(() => setUsers(users.filter(user => user.id !== id)))
      .catch(() => alert('Failed to delete user.'));
  };

  return (
    <div className='App'>
         
      <ErrorBoundary>
      <h1>User Management Dashboard</h1>
        <UserForm initialData={editingUser} onSave={handleSave} />
        <UserList users={users} onEdit={setEditingUser} onDelete={handleDelete} />
      </ErrorBoundary>
    </div>

  );
};

export default App;
