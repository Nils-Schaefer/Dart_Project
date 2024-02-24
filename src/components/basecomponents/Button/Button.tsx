import styles from './Button.module.css';

export function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return <button {...props} className={styles.button} />;
}
