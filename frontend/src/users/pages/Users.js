import UserList from "../components/UserList";
import React from 'react';

const Users = () => {
  const users = [
    { id: "u1", name: "Aashay goel", image: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260", placeCount: 30 },
    { id: "u2", name: "Chirag goel", image: "", placeCount: 10 },
    { id: "u3", name: "Vanshika goel", image: "", placeCount: 20 },
    { id: "u4", name: "Vanshika goel", image: "", placeCount: 20 },
  ];
  return <UserList users={users} />;
};

export default Users;
