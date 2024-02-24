import { useState } from 'react';
import styles from './app.module.css';
import { Addusers } from './components/addusers';
import { Usercard } from './components/usercard';
import { v4 as uuid } from 'uuid';
import { Modal } from './components/modal';
type User = { name: string; score: number; id: string };

function App() {
  const [users, setUsers] = useState<User[]>([]);

  function addUser(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  return (
    <div className={styles.appwraper}>
      <Modal open={false} setOpen={() => null}>
        asdasd
      </Modal>

      <div className={styles.app}>
        {users.map((user) => (
          <Usercard
            key={user.id}
            name={user.name}
            score={user.score}
          ></Usercard>
        ))}
        <Addusers
          onClick={() =>
            addUser({ name: 'Nils', score: 301, id: uuid() })
          }
        />
      </div>
    </div>
  );
}

export default App;
