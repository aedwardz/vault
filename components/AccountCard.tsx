import { Account } from '@/lib/types';
import styles from './AccountCard.module.css';

export default function AccountCard({ account }: { account: Account }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{account.name}</h1>
      <h2 className={styles.type}>{account.type}</h2>
      <h3 className={styles.institution}>{account.institution.name}</h3>
    </div>
  );
}
