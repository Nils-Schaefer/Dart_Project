import { useState } from 'react';
import styles from './app.module.css';
import { Addusers } from './components/Adduser/addusers';
import { Usercard } from './components/Usercard/usercard';
import { AddUserCardModal } from './components/Usercard/Addusercard/addusercardmodal';
import { User } from './types';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [addUserCardModalOpen, setAddUserCardModalOpen] =
    useState(true);

  function addUser(user: User) {
    console.log(user);
    setUsers((prev) => [...prev, user]);
  }

  return (
    <div className={styles.appwraper}>
      <AddUserCardModal
        open={addUserCardModalOpen}
        setOpen={setAddUserCardModalOpen}
        addUser={addUser}
      ></AddUserCardModal>
      <div className={styles.app}>
        {users.map((user) => (
          <Usercard
            key={user.id}
            name={user.name}
            score={user.score}
          ></Usercard>
        ))}
        <Addusers onClick={() => setAddUserCardModalOpen(true)} />
      </div>
    </div>
  );
}

export default App;
