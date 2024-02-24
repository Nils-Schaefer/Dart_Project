import { useMemo } from 'react';
import styles from './usercard.module.css';
export function Usercard(props: { score: number; name: string }) {
  const iconcolor = useMemo(
    () => `hsl(${Math.floor(Math.random() * 18) * 20} 60% 50%)`,
    []
  );

  return (
    <div className={styles.usercard}>
      <div
        className={styles.playericon}
        style={{ background: iconcolor }}
      >
        {props.name[0].toUpperCase()}
      </div>
      <div className={styles.playername}>{props.name}</div>
      <div className={styles.playerscore}>{props.score}</div>
      <div className={styles.addpoints}>+</div>
    </div>
  );
}
