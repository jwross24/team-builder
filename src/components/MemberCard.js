import React, { useState } from 'react';

const MemberCard = (props) => {
  const [style, setStyle] = useState({});

  return (
    <div className="card">
      <p>
        Name:{' '}
        <span className="cardName" maxLength="20" style={style}>
          {props.name}
        </span>
      </p>
      <p>
        {' '}
        Email:{' '}
        <span className="cardEmail" style={style}>
          {' '}
          {props.email}
        </span>
      </p>
      <p>
        Role:{' '}
        <span className="cardRole" style={style}>
          {props.role}
        </span>
      </p>
    </div>
  );
};

export default MemberCard;
