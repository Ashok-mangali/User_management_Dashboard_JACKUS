import React, { useState, useEffect } from 'react';

const UserForm = ({ initialData, onSave }) => {
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', department: '' });
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const boxStyle = {
        fontSize: '22px',
        backgroundColor: isHover ? 'lightblue' : 'rgb(0, 191, 255)',
        color: isHover ? 'red' : 'black',
    };


    useEffect(() => {
        if (initialData) {
            setFormData(initialData);
        } else {
            setFormData({ firstName: '', lastName: '', email: '', department: '' });
        }
    }, [initialData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
            <h2>{formData.id ? 'Edit User' : 'Adding User' }</h2>
            <input style={{ color: 'black', margin: '5px', padding: '7px', fontWeight: 'bold' }}
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
            />
            <input style={{ color: 'black', margin: '5px', padding: '7px', fontWeight: 'bold' }}
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
            />
            <input style={{ color: 'black', margin: '5px', padding: '7px', fontWeight: 'bold' }}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
            />
            <input style={{ color: 'black', margin: '5px', padding: '7px', fontWeight: 'bold' }}
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Department"
                required
            />
            <button type="submit" style={boxStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >Add User</button>
        </form>
    );
};

export default UserForm;
