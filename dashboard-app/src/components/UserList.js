import React from 'react';
import './Style.css'

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className='App'>
      
      <h2>User List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        
        <tbody >
          {users.map(user => (
            <tr key={user.id}>
              <td >{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.department}</td>
              <td>
                <div style={{  marginRight: '10px', padding: "9px", justifyContent: 'space-between' }} >
                <button style={{ color: "black", backgroundColor: "green", margin: "2px" }} onClick={() => onEdit(user)}>Edit</button>
                <button style={{ color: "black", backgroundColor: "red", margin: "2px" }} onClick={() => onDelete(user.id)}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
    </div>
    
  );
};

export default UserList;
