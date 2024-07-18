import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import UserList from './components/UserList';

function App() {
  const users = [
    { id: 1, name: 'Rudraksh Jhaveri', age: 19 },
    { id: 2, name: 'Felonious Gru', age: 30 },
    { id: 3, name: 'Tony Stark', age: 50 }
  ];

  return (
    <div className="App">
      <Header title="User List" />
      <UserList users={users} />
    </div>
  );
}
export default App  
