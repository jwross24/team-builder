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

  return (
    <div className="App">
      <Form memberList={memberList} setMemberList={setMemberList} />
      <h3>Team List</h3>
      <div className="card-wrapper">
        {memberList.map((member) => (
          <MemberCard
            name={member.name}
            email={member.email}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
