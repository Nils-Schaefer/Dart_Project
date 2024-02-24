import styles from './addusers.module.css';
export function Addusers(props: { onClick: () => void }) {
  return (
    <div className={styles.addplayer} onClick={props.onClick}>
      <div className={styles.addicon}>+</div>
    </div>
  );
}
