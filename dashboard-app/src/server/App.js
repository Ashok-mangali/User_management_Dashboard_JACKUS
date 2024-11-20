import axios from 'axios';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const fetchUsers = () =>
  api.get('/users').then(response => {
    return {
      data: response.data.map(user => ({
        id: user.id,
        firstName: user.name.split(' ')[0], // Extract first name
        lastName: user.name.split(' ')[1] || '', // Extract last name
        email: user.email,
        department: 'General', 
      })),
    };
  });

export const addUser = (user) => api.post('/users', user);
export const updateUser = (id, user) => api.put(`/users/${id}`, user);
export const deleteUser = (id) => api.delete(`/users/${id}`);

export default api;
