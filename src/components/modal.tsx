import { ReactNode } from 'react';
import styles from './modal.module.css';
export function Modal(props: {
  open: boolean;
  setOpen: (value: boolean) => void;
  children: ReactNode;
}) {
  if (!props.open) {
    return null;
  }

  return (
    <div className={styles.dark}>
      <div className={styles.modal}>
        <div className={styles.close}>X</div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
}
