import { useState } from 'react';
import styles from './app.module.css';
import { Addusers } from './components/Adduser/addusers';
import { Usercard } from './components/Usercard/usercard';
import { AddUserCardModal } from './components/Usercard/Addusercard/addusercardmodal';
import { User } from './types';
import { AddPlayerScoreModal } from './components/Usercard/addplayerscore/addplayerscoremodal';

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [addUserCardModalOpen, setAddUserCardModalOpen] =
    useState(true);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(
    null
  );

  function addUser(user: User) {
    setUsers((prev) => [...prev, user]);
  }

  return (
    <div className={styles.appwraper}>
      <AddUserCardModal
        open={addUserCardModalOpen}
        closeModal={() => setAddUserCardModalOpen(false)}
        addUser={addUser}
      />
      <AddPlayerScoreModal
        addPlayerScore={(points) => {
          setUsers(
            users.map((user) =>
              user.id === selectedUserId
                ? { ...user, score: user.score - points }
                : user
            )
          );
        }}
        open={selectedUserId !== null}
        closeModal={() => setSelectedUserId(null)}
      />
      <div className={styles.app}>
        {users.map((user) => (
          <Usercard
            key={user.id}
            name={user.name}
            score={user.score}
            onAddPoints={() => setSelectedUserId(user.id)}
          ></Usercard>
        ))}
        <Addusers onClick={() => setAddUserCardModalOpen(true)} />
      </div>
    </div>
  );
}

export default App;
