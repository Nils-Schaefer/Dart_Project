import { ReactNode } from 'react';
import styles from './modal.module.css';

export type Basemodalprops = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

export function Modal(
  props: Basemodalprops & { children: ReactNode }
) {
  if (!props.open) {
    return null;
  }

  return (
    <div className={styles.dark}>
      <div className={styles.modal}>
        <div
          className={styles.close}
          onClick={() => props.setOpen(false)}
        >
          X
        </div>
        <div className={styles.content}>{props.children}</div>
      </div>
    </div>
  );
}
