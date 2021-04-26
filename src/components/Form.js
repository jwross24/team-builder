import React, { useState, useEffect } from 'react';

const Form = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  const onInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const addMember = (event) => {
    props.setMemberList([
      ...props.memberList,
      { ...formData, id: props.memberList.length },
    ]);
    setFormData({ name: '', email: '', role: '' });
    event.preventDefault();
  };

  const editMember = (event) => {
    props.setMemberList(
      props.memberList.map((member) => {
        if (member.id === props.memberToEdit.id) {
          return { ...formData, id: member.id };
        } else {
          return member;
        }
      }),
    );
    props.setMemberToEdit({
      id: -1,
      name: '',
      email: '',
      role: '',
    });
    event.preventDefault();
  };

  useEffect(() => {
    setFormData({ ...props.memberToEdit });
    console.log(props.memberToEdit);
  }, [props.memberToEdit]);

  useEffect(() => {
    console.log(props.memberList);
  }, [props.memberList]);

  return (
    <>
      <form
        onSubmit={(event) =>
          props.memberToEdit.id !== -1 ? editMember(event) : addMember(event)
        }
      >
        <h3>{(props.memberToEdit.id !== -1 ? 'Edit' : 'Add') + ' Member'}</h3>
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
        <button>{props.memberToEdit.id !== -1 ? 'Edit' : 'Add'}</button>
      </form>
    </>
  );
};

export default Form;
