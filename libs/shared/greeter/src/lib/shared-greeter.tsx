import styles from './shared-greeter.module.css';

/* eslint-disable-next-line */
export interface SharedGreeterProps {}

export function SharedGreeter(props: SharedGreeterProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SharedGreeter!</h1>
    </div>
  );
}

export default SharedGreeter;
