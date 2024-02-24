import { useEffect, useRef, useState } from 'react';
import { User } from '../../../types';
import { Basemodalprops, Modal } from '../../modal';
import styles from './addusercardmodal.module.css';
import { v4 as uuid } from 'uuid';

export function AddUserCardModal(
  props: Basemodalprops & { addUser: (user: User) => void }
) {
  const [name, setname] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.open) {
      ref.current?.focus();
    }
  }, [props.open]);

  useEffect(() => {
    setname('');
  }, [props.open]);

  return (
    <Modal open={props.open} setOpen={props.setOpen}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.addUser({
            name,
            score: 0,
            id: uuid(),
          });
          props.setOpen(false);
        }}
      >
        <input
          ref={ref}
          placeholder="Name"
          value={name}
          onChange={(event) => setname(event.target.value)}
        ></input>
        <button type="submit">Hinzufügen</button>
      </form>
    </Modal>
    //
  );
}
