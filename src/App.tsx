import { useState } from 'react';
import './App.css';
import { Usercard } from './components/usercard';
import { v4 as uuid } from 'uuid';
type User = { name: string; score: number; id: string };

function App() {
  const [users, setUsers] = useState<User[]>([
    { name: 'anna', score: 301, id: uuid() },
    { name: 'bernd', score: 201, id: uuid() },
  ]);
  return (
    <div>
      {users.map((user) => (
        <Usercard
          key={user.id}
          name={user.name}
          score={user.score}
        ></Usercard>
      ))}
    </div>
  );
}

export default App;
