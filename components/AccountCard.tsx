import { Account, Balances } from '@/lib/types';
import styles from './AccountCard.module.css';
import { useState, useEffect } from 'react';

export default function AccountCard({
  account,
  token,
}: {
  account: Account;
  token: string;
}) {
  const [balances, setBalances] = useState<Balances>();

  useEffect(() => {
    if (!token) {
      return;
    }
    fetch(`/api/accounts/${account.id}/balances`, {
      headers: { 'x-access-token': token },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBalances(data);
      });
  }, []);

  return (
    <div className={styles.card}>
      <h1 className={styles.name}>{account.name}</h1>
      <h2 className={styles.type}>{account.type}</h2>
      <h3 className={styles.institution}>{account.institution.name}</h3>
      <h4>Balance: ${balances?.ledger}</h4>
    </div>
  );
}
