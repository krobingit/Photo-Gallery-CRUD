import { useEffect, useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import { User } from './User';

export function UsersList() {
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch("https://6166c4da13aa1d00170a66f9.mockapi.io/list-users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };
  useEffect(getUsers, []);
  return (
    <section className="UsersList">
      <h1 className="TITLE"><PersonIcon style={{ fontSize: "5rem" }} /> Users List</h1>
      <div className="Users">
        {users.map(({ name, username, email, about, displaypic, id }, index) => <User name={name}
          username={username} email={email} about={about} displaypic={displaypic}
          id={id} key={index} />)}
      </div>



    </section>

  );


}
