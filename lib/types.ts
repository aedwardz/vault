export interface Transaction {
  running_balance: string;
  account_id: string;
  amount: number;
  details: {
    processing_status: string;
    category: string;
  };
  description: string;
  date: string;
  type: string;
  id: string;
  status: string;
}

export interface Account {
  enrollment_id: string;
  links: {
    balances: string;
    self: string;
    transactions: string;
  };
  institution: {
    name: string;
    id: string;
  };
  type: string;
  name: string;
  subtype: string;
  currency: string;
  id: string;
  last_four: number;
  status: string;
}
