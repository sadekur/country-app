import React, { useEffect, useState } from "react";
import axios from 'axios';

const About = () => {
  const [users, setUsers] = useState([]);
  const getAllUsers = async () => {
    const respose = await axios ("http://localhost:3000/user");
    setUsers(respose.data);
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(users);

  return (
    <div>
      <h2>About</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default About;
