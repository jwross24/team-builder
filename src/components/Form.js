import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const [formData, setFormData] = useState({ name: '', email: '', role: '' });

  const onInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const addMember = (event) => {
    event.preventDefault();
    props.setMemberList([
      ...props.memberList,
      { id: props.memberList.length, ...formData },
    ]);
    setFormData({ name: '', email: '', role: '' });
  };

  const editMember = (event) => {
    event.preventDefault();
    props.setMemberList(
      props.memberList.map((member) => {
        if (member.id === props.memberToEdit.id) {
          return { id: member.id, ...formData };
        } else {
          return member;
        }
      }),
    );
    setFormData({ name: '', email: '', role: '' });
    props.setMemberToEdit(null);
  };

  useEffect(() => {
    setFormData({ ...props.memberToEdit });
  }, [props.memberToEdit]);

  return (
    <>
      <form
        onSubmit={(event) =>
          props.memberToEdit ? editMember(event) : addMember(event)
        }
      >
        <h3>{(props.memberToEdit ? 'Edit' : 'Add') + ' Member'}</h3>
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
        <button>{props.memberToEdit ? 'Edit' : 'Add'}</button>
      </form>
    </>
  );
};

export default Form;
