<div align="center">

# 🪹 BlogNest Platform API

<br/>

<img src="./assets/blognest_banner.png" alt="BlogNest Project Banner" width="100%" height="300" style="object-fit: cover; object-position: center; border-radius: 8px;" />

<br/>

**A modern, robust, and scalable backend REST API for your next-generation blogging platform.**

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](#)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](#)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](#)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#)

<br/>
</div>

---

## 🎯 About The Project

BlogNest is a high-performance backend infrastructure designed for content creation and management. By leveraging **Express.js** and **TypeScript**, it provides type-safe and reliable data flow. Data modeling and interactions are managed gracefully with **Prisma ORM** via a **PostgreSQL** database, while unified security is handled efficiently using **Better Auth**.

---

## 🚀 Key Features

- **🔑 Secure Authentication**: Integrated with Better Auth.
- **🛡️ Type-Safe Architecture**: Full TypeScript implementation.
- **🚀 Database Management**: Prisma ORM (v7) and robust PostgreSQL integration.
- **📧 Mailer Integrated**: Email functionalities configured via Nodemailer.
- **🚦 Scalable Structure**: Clear separation between modular routes, controllers, and middlewares.

---

## 📁 Project Structure

```text
BlogNest/
├── prisma/             # 🗄️ Database models (schema.prisma) & configurations
├── src/
│   ├── middlewares/    # 🔒 Auth, Error Handlers, Not Found Handler
│   ├── scripts/        # 🛠️ Utility scripts (e.g., seeding admin users)
│   ├── app.ts          # ⚙️ Express Application bootstrap
│   └── server.ts       # 🚀 Main entry point
├── .env                # 🤫 Environment combinations
└── package.json        # 📦 Dependency management
```

---

## 🛠️ Getting Started

Follow these clean standard steps to set up the environment and run the project strictly on your local machine.

### Prerequisites

Ensure you have the following installed:
- **[Node.js](https://nodejs.org/en/)** (v20+ recommended)
- **[PostgreSQL](https://www.postgresql.org/)** Database Engine

<br/>

### 1️⃣ Clone & Install dependencies

```bash
# Clone the repository
git clone https://github.com/your-username/BlogNest.git

# Navigate into the directory
cd BlogNest

# Install all the necessary packages
npm install
```

### 2️⃣ Environment Variables Workspace

Rename `.env.example` to `.env` or create a new `.env` file at the root, and configure it:

```env
# Database configuration
DATABASE_URL="postgres://user:password@localhost:5432/blognest"

# Server configuration
PORT=3000

# Add other vital configurations (Better Auth, SMTP credentials, etc.)
```

### 3️⃣ Database Migration & Prisma Setup

After configuring your PostgreSQL connection string, integrate your database schema:

```bash
# Generate the Prisma types
npx prisma generate

# Push the schema architecture to PostgreSQL
npx prisma db push
```

### 4️⃣ Seed The Database (Optional)

Inject essential initial data (like an Admin user) into your database directly:

```bash
npm run seed
```

### 5️⃣ Launch Time

Start up the development server featuring auto-reload capabilities powered by `tsx`:

```bash
npm run dev
```

> **Hooray! 🎉** Your server should now be running cleanly on `http://localhost:3000`.

---

## 📜 Available Scripts

| Script | Action |
| ------ | ------ |
| `npm run dev` | Spins up the development server with Hot Module Reloading. |
| `npm run seed`| Triggers the DB seeding protocol using default admin configurations. |

---

## 🤝 Contribution Guidelines

Contributions, issues, and feature requests are highly appreciated! Feel free to check the [issues page](#) if you want to contribute.

<div align="center">
  <br/>
  <i>Crafted with ✨ and strong typing.</i>
</div>
