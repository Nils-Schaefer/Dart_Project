import { User } from '../../../types';
import { Basemodalprops, Modal } from '../../modal';
import styles from './addusercardmodal.module.css';
import { v4 as uuid } from 'uuid';

export function AddUserCardModal(
  props: Basemodalprops & { addUser: (user: User) => void }
) {
  return (
    <Modal open={props.open} setOpen={props.setOpen}>
      <button
        onClick={() => {
          props.addUser({ name: 'Nils', score: 301, id: uuid() });
          props.setOpen(false);
        }}
      >
        asdasd
      </button>
    </Modal>
    //
  );
}
