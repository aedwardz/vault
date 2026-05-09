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

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Teller

1. Sign up at [teller.io](https://teller.io)
2. When you sign up, a `teller.zip` file will automatically download — don't lose this
3. Go to your [Teller dashboard](https://dashboard.teller.io) and copy your **Application ID** — it looks like `app_abc123`
4. Extract `teller.zip` and create a `certs/` folder at the root of the project:
