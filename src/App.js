import React, {useState, Fragment} from 'react';
import './App.css';

import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
      setUsersList(prevState => {
        return [...prevState, {username: uName, age: uAge, id: Math.random().toString()}];
      })
  };

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </Fragment>
  );
}

export default App;
