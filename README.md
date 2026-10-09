# Backend Ledger Project

Hey everyone, welcome to the Backend Ledger! I put this project together as a REST API to handle a basic financial ledger system. The idea was to build something solid to manage users, their accounts, and the money moving between them and other users.


## Tech Stack
For the backend, I stuck to tools I really enjoy working with:
- **Node.js & Express** - The core of the API.
- **MongoDB & Mongoose** - My database.
- **JWT & cookie-parser** - Handling authentication and keeping sessions secure.
- **Bcrypt** - Making sure passwords stay safe.
- **Nodemailer** - For firing off emails when needed.

## What's included?

- **User Authentication**: Secure sign up and login flows.
- **Account Management**: You can create different financial accounts and check their status.
- **Transactions**: Core ledger functionality. It tracks deposits, withdrawals, and transfers securely so there's a full history.

## Project Layout

I organized the codebase inside the `src` folder:
- `models/` - The database schemas (like User, Account, Transactions).
- `controllers/` and `routes/` - All the API endpoints are defined and handled here.
- `middleware/` - Things like my auth guards.
- `services/` - The heavy lifting and business logic.
- `config/` - Database connection and env setup.

## Want to run it locally?

It's pretty straightforward if you have Node and MongoDB ready to go.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Environment Variables:**
   Make sure you create a `.env` file at the root. You'll need to define a few things:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   # Don't forget your Nodemailer setup if you want emails to work
   you can do it through Google Console.
   ```

3. **Fire it up:**
   For development (it'll auto-restart on changes):
   ```bash
   make sure to install Nodemon and put it in package.json
   npm run dev
   ```

You should see it running on `http://localhost:3000`.

## Quick look at the API
- `/api/auth` - Everything related to signing in and out.
- `/api/accounts` - Managing the accounts themselves.
- `/api/transactions` - Where the money actually moves.

Feel free to poke around the code and let me know what you think needs to be done!
