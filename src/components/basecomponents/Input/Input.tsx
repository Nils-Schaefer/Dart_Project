import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef<
  HTMLInputElement | null,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => {
  return <input {...props} ref={ref} className={styles.input} />;
});
