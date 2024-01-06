import styles from './usercard.module.css';
export function Usercard(props: { score: number; name: string }) {
  return (
    <div className={styles.usercard}>
      <div className={styles.playericon}>
        {props.name[0].toUpperCase()}
      </div>
      <div className={styles.playername}>{props.name}</div>
      <div className={styles.playerscore}>{props.score}</div>
      <div className={styles.addpoints}>+</div>
    </div>
  );
}
