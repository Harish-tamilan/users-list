import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

function App() {

  const[ users, setUser] = useState([]);

  const addUser = (name, age)=>{
    console.log('inside addUser in App.js, name is ', name, ', age is ',age);
    setUser((prev)=>{
      return [...users, {name:name, age:age, id:Math.random().toString()},];
    });
  }

  return (
    <div>
      <AddUser add={addUser}/>
      <UsersList users={users}/>
    </div>
  );
}

export default App;
