import { useState } from 'react';
import styles from './app.module.css';
import { Usercard } from './components/usercard';
import { v4 as uuid } from 'uuid';
type User = { name: string; score: number; id: string };

function App() {
  const [users, setUsers] = useState<User[]>([
    { name: 'anna', score: 301, id: uuid() },
    { name: 'bernd', score: 201, id: uuid() },
    { name: 'carsten', score: 501, id: uuid() },
    { name: 'doris', score: 401, id: uuid() },
  ]);
  return (
    <div className={styles.appwraper}>
      <div className={styles.app}>
        {users.map((user) => (
          <Usercard
            key={user.id}
            name={user.name}
            score={user.score}
          ></Usercard>
        ))}
      </div>
    </div>
  );
}

export default App;
