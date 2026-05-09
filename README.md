````markdown
# Vault 💰

A personal finance tracker that connects to your bank account and gives you a clear view of your transactions and spending.

Built with Next.js and powered by [Teller.io](https://teller.io).

---

## Prerequisites

- [Node.js](https://nodejs.org) v18 or higher
- A free [Teller.io](https://teller.io) developer account

---

## Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/vault.git
cd vault
```
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Teller

1. Sign up at [teller.io](https://teller.io)
2. When you sign up, a `teller.zip` file will automatically download — don't lose this
3. Go to your [Teller dashboard](https://dashboard.teller.io) and copy your **Application ID** — it looks like `app_abc123`
4. Extract `teller.zip` and create a `certs/` folder at the root of the project:

```
vault/
  certs/
    certificate.pem
    private_key.pem
```

> ⚠️ Never commit the `certs/` folder. It contains your private key which gives access to your bank data.

### 4. Set up environment variables

Create a `.env.local` file at the root of the project:

```
NEXT_PUBLIC_TELLER_APP_ID=app_YOUR_ID_HERE
```

Replace `app_YOUR_ID_HERE` with your Application ID from the Teller dashboard.

### 5. Run the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and connect your bank account!

---

## Connecting Your Bank

### Sandbox (fake data, for testing)

The app runs in sandbox mode by default. Use these credentials in the Teller widget:

- **Username:** `username`
- **Password:** `password`

### Development (real bank data, free)

When you're ready to connect your real bank account:

1. In `app/page.tsx` change:

```ts
environment: 'sandbox' → environment: 'development'
```

2. Clear your browser's localStorage to remove the old sandbox token
3. Reconnect with your real bank credentials

> ⚠️ Teller's free tier allows 100 enrollments. Each time you connect counts as one enrollment, so avoid disconnecting and reconnecting unnecessarily.

---

## Project Structure

```
vault/
  app/
    account/[accountId]/   ← Individual account & transactions page
    api/
      accounts/            ← API route for fetching accounts
      accounts/[accountId]/transactions/  ← API route for fetching transactions
    dashboard/             ← Main dashboard showing all accounts
    page.tsx               ← Connect bank page
  components/
    NavBar.tsx             ← Shared navigation bar
    TransactionCard.tsx    ← Transaction list item
  lib/
    tellerClient.ts        ← Teller API helper (handles certificates)
    types.ts               ← TypeScript interfaces
  certs/                   ← Teller certificates (DO NOT COMMIT)
```

---

## Environment Variables

| Variable                    | Description                                   |
| --------------------------- | --------------------------------------------- |
| `NEXT_PUBLIC_TELLER_APP_ID` | Your Teller Application ID from the dashboard |

---

## Tech Stack

- [Next.js 15](https://nextjs.org) — React framework
- [Teller.io](https://teller.io) — Bank data API
- [Tailwind CSS](https://tailwindcss.com) — Styling
- [TypeScript](https://www.typescriptlang.org) — Type safety

```

```
