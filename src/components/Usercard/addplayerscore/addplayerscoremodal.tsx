import { useState, useRef, useEffect } from 'react';
import { Button } from '../../basecomponents/Button/Button';
import { Input } from '../../basecomponents/Input/Input';
import { Basemodalprops, Modal } from '../../modal';
import styles from './addplayerscoremodal.module.css';

type AddPlayerScoreModalProps = Basemodalprops & {
  addPlayerScore: (points: number) => void;
};

export function AddPlayerScoreModal(props: AddPlayerScoreModalProps) {
  const [score, setScore] = useState<string>('');
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (props.open) {
      ref.current?.focus();
    }
  }, [props.open]);

  useEffect(() => {
    setScore('');
  }, [props.open]);

  return (
    <Modal open={props.open} closeModal={props.closeModal}>
      <form
        className={styles.content}
        onSubmit={(event) => {
          event.preventDefault();
          props.addPlayerScore(Number.parseInt(score));
          props.closeModal();
        }}
      >
        <Input
          type="number"
          ref={ref}
          placeholder="Punkte..."
          value={score}
          onChange={(event) => setScore(event.target.value)}
        ></Input>
        <Button type="submit" disabled={score.length === 0}>
          Hinzufügen
        </Button>
      </form>
    </Modal>
  );
}
