import React, { useState } from 'react';
import './App.css';

import MemberCard from './components/MemberCard';
import Form from './components/Form';

const defaultMembers = [
  {
    name: 'Angela I. Tarkington',
    email: 'AngelaITarkington@armyspy.com',
    role: 'Parking enforcement worker',
  },
  {
    name: 'Faith J. Long',
    email: 'FaithJLong@jourrapide.com',
    role: 'Mixing and blending machine operator',
  },
];

function App() {
  const [memberList, setMemberList] = useState(defaultMembers);
  const [memberToEdit, setMemberToEdit] = useState(null);

  return (
    <div className="App">
      <Form
        memberList={memberList}
        setMemberList={setMemberList}
        memberToEdit={memberToEdit}
      />
      <h3>Team List</h3>
      <div className="card-wrapper">
        {memberList.map((memberData, index) => (
          <MemberCard
            key={index}
            memberData={memberData}
            setMemberToEdit={setMemberToEdit}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
