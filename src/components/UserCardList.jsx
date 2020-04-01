import React from 'react';
import UserCard from './UserCard';

export const UserCardList = ({ users }) => {
  return (
    <div>
      <div style={userStyle}>
        {users.map(user => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default UserCardList;
