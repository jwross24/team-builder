import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  const onInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setMemberList([...props.memberList, formData]);
    setFormData({ name: '', email: '', role: '' });
  };

  useEffect(() => setFormData({ ...props.memberToEdit }), [props.memberToEdit]);

  return (
    <>
      <form onSubmit={(event) => handleSubmit(event)}>
        <h3>Add Member</h3>
        <label htmlFor="nameInput">
          Name:{' '}
          <input
            type="text"
            onChange={(event) => onInputChange(event)}
            id="nameInput"
            name="name"
            value={formData.name}
          />
        </label>

        <label htmlFor="emailInput">
          Email:{' '}
          <input
            type="text"
            onChange={(event) => onInputChange(event)}
            id="emailInput"
            name="email"
            value={formData.email}
          />
        </label>

        <label htmlFor="roleInput">
          Role:{' '}
          <input
            type="text"
            onChange={(event) => onInputChange(event)}
            id="roleInput"
            name="role"
            value={formData.role}
          />
        </label>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
