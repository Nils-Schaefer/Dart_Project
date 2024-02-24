import { useEffect, useRef, useState } from 'react';
import { User } from '../../../types';
import { Basemodalprops, Modal } from '../../modal';
import styles from './addusercardmodal.module.css';
import { v4 as uuid } from 'uuid';
import { Button } from '../../basecomponents/Button/Button';
import { Input } from '../../basecomponents/Input/Input';

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
        <Input
          ref={ref}
          placeholder="Name"
          value={name}
          onChange={(event) => setname(event.target.value)}
        ></Input>
        <Button type="submit" disabled={name.length === 0}>
          Hinzufügen
        </Button>
      </form>
    </Modal>
    //
  );
}
