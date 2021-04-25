import React from 'react';

const MemberCard = (props) => {
  const { name, email, role } = props.memberData;
  return (
    <div className="card">
      <p>
        Name:{' '}
        <span className="cardName" maxLength="20">
          {name}
        </span>
      </p>
      <p>
        {' '}
        Email: <span className="cardEmail"> {email}</span>
      </p>
      <p>
        Role: <span className="cardRole">{role}</span>
      </p>
      <button
        className="edit-button"
        onClick={() => props.setMemberToEdit(props.memberData)}
      >
        Edit
      </button>
    </div>
  );
};

export default MemberCard;
