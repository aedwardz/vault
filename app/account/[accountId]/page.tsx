'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { Transaction } from '@/lib/types';
import TransactionCard from '@/components/TransactionCard';

const Account = ({ params }: { params: Promise<{ accountId: string }> }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const { accountId } = use(params);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const accessToken = localStorage.getItem('teller_access_token');
      if (accessToken === null) {
        router.replace('/');
        return;
      }
      try {
        const response = await fetch(
          `/api/accounts/${accountId}/transactions`,
          {
            headers: { 'x-access-token': accessToken },
          }
        );
        if (!response.ok) {
          throw new Error(
            `HTTP error: ${response.status} ${response.statusText}`
          );
        }
        const data = await response.json();
        setTransactions(data);
        console.log(transactions);
      } catch (Error) {
        console.log(Error);
      }
    }

    fetchData();
  }, []);
  return (
    <div>
      {transactions.map((tx) => (
        <TransactionCard key={tx.id} transaction={tx}></TransactionCard>
      ))}
    </div>
  );
};

export default Account;
