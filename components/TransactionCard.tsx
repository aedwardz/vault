import React from 'react';
import { Transaction } from '@/lib/types';
import styles from './TransactionCard.module.css';

const TransactionCard = ({ transaction }: { transaction: Transaction }) => {
  const amount = transaction.amount;
  const isDebit = amount < 0;

  return (
    <div className={styles.container}>
      <div className="flex items-center gap-4">
        <div
          className={`${styles.icon} ${isDebit ? styles.debit : styles.credit}`}
        >
          {isDebit ? '↓' : '↑'}
        </div>
        <div>
          <p className={styles.description}>{transaction.description}</p>
          <p className={styles.date}>{transaction.date}</p>
          <p className={styles.category}>{transaction.details.category}</p>
        </div>
      </div>
      <div className="text-right">
        <span
          className={`${styles.amount} ${isDebit ? styles.amountDebit : styles.amountCredit}`}
        >
          {isDebit ? '-' : '+'}${Math.abs(amount).toFixed(2)}
        </span>
        <p className={styles.date}>{transaction.status}</p>
      </div>
    </div>
  );
};

export default TransactionCard;
