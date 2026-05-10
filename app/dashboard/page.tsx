'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import styles from './dashboard.module.css';
import Link from 'next/link';
import { Account } from '@/lib/types';
import AccountCard from '@/components/AccountCard';

const Dashboard = () => {
  const [token, setToken] = useState<string | null>(null);
  const [accounts, setAccounts] = useState<Account[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem('teller_access_token');
    setToken(accessToken);

    if (!accessToken) return;

    fetch('/api/accounts', {
      headers: { 'x-access-token': accessToken },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setAccounts(data.data);
      });
  }, []);

  console.log('Token in Dashboard:', token);
  return (
    <div className={styles.container}>
      {token ? (
        <h1 className={styles.title}>Dashboard</h1>
      ) : (
        <h1>Please connect your bank account to view the dashboard.</h1>
      )}
      {/* Accounts Section */}
      <h1>Accounts</h1>
      <div className={styles.accounts}>
        {accounts.map((account: any) => (
          <Link key={account.id} href={`/account/${account.id}`}>
            <AccountCard account={account}></AccountCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
