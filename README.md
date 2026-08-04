# BlogNest 🪹

BlogNest is a modern, fast, and secure backend REST API for a blogging platform. Built with **Express.js**, **TypeScript**, and **Prisma ORM**, it provides a robust foundation for building scalable applications. Authentication is handled seamlessly using **Better Auth**, and PostgreSQL acts as the primary database.

---

## 🚀 Technologies Used

- **Framework:** [Express.js](https://expressjs.com/) (v5)
- **Language:** TypeScript 
- **ORM:** [Prisma v7](https://www.prisma.io/) (with `@prisma/adapter-pg`)
- **Database:** PostgreSQL (via `pg`)
- **Authentication:** [Better Auth](https://better-auth.com/)
- **Email Service:** Nodemailer

---

## 📁 Project Structure

```text
BlogNest/
├── prisma/             # Prisma schema and database configuration
├── src/
│   ├── middlewares/    # Custom Express middlewares (Auth, Error Handling, etc.)
│   ├── scripts/        # Utility scripts (e.g., seeding admin users)
│   ├── server.ts       # Application entry point
│   └── app.ts          # Express App configuration
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

---

## 🛠️ Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (v20+ recommended)
- **PostgreSQL** Database

### 1. Clone & Install

Clone the repository and install the dependencies:

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory and configure your essential variables:

```env
DATABASE_URL="postgres://user:password@localhost:5432/blognest"
PORT=3000
# Add your other API keys and secret variables here
```

### 3. Database Setup

Push the Prisma schema to your database to create the necessary tables, and generate the Prisma Client:

```bash
npx prisma generate
npx prisma db push
```

### 4. Seeding the Database (Optional)

You can seed the database with an initial admin user:

```bash
npm run seed
```

### 5. Start the Development Server

Run the development server with live reloading (powered by `tsx`):

```bash
npm run dev
```

The server will start running, usually at `http://localhost:3000`.

---

## 📜 Scripts

- `npm run dev`: Starts the development server in watch mode.
- `npm run seed`: Executes the database seeding script (`src/scripts/seedAdmin.ts`).

---

## 🔒 Security & Middlewares

This API employs various middleware to handle authentication, manage errors globally, and capture 'Route Not Found' exceptions, ensuring a secure and predictable developer experience.

---

*Built with ❤️ utilizing Prisma, Express, and TypeScript.*
