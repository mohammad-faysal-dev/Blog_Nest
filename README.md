<div align="center">

# 🪹 BlogNest

### The backend engine for modern, secure and scalable blogging platforms.

<br/>

<img src="./assets/blognest_banner.png" alt="BlogNest Banner" width="100%" height="300" style="object-fit: cover; object-position: center; border-radius: 8px;" />

<br/>
<br/>

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)

[Live Demo](#live-demo) •
[Why BlogNest](#why-blognest) •
[Features](#features) •
[Architecture](#architecture) •
[Quick Start](#quick-start) •
[Deployment](#deployment) •
[Support](#support)

</div>

---

## Overview

**BlogNest** is a production-ready REST API that powers the content side of a blogging platform. It gives your product a dependable foundation for user accounts, secure sign-in, content management and email communication, so your team can focus on building the experience your readers will love instead of rebuilding infrastructure.

Built with **TypeScript**, **Express.js**, **Prisma** and **PostgreSQL**, BlogNest is designed to be easy to understand, safe to extend and ready to grow with your audience.

---

## Live Demo

| Resource | Link |
| :-- | :-- |
| Frontend Application | [blog-nest-client.vercel.app](https://blog-nest-client.vercel.app) |
| API Base URL | `https://your-api-domain.com` *(replace with your deployed API URL)* |

---

## Why BlogNest

| What you get | Why it matters |
| :-- | :-- |
| **Secure by design** | Authentication is handled by Better Auth, so user accounts and sessions are protected with a proven approach. |
| **Fewer bugs in production** | A fully type-safe codebase catches mistakes early, long before they reach your users. |
| **Reliable data** | PostgreSQL with Prisma ORM keeps your content consistent, structured and easy to query. |
| **Ready to scale** | A modular structure lets you add new features without touching unrelated parts of the system. |
| **Easy to maintain** | Clean, well-organized code means new developers can understand and contribute quickly. |
| **Built-in email support** | Nodemailer is integrated for transactional emails such as verification and notifications. |

---

## Features

- **Secure Authentication** — Account sign-in and session management powered by Better Auth, including Google OAuth support.
- **Type-Safe Architecture** — End-to-end TypeScript for predictable, maintainable code.
- **Robust Data Layer** — Prisma ORM (v7) on PostgreSQL for clean schema management and fast, safe queries.
- **Email Integration** — Configurable SMTP email delivery through Nodemailer.
- **Centralized Error Handling** — Dedicated middlewares for authentication, error responses and unknown routes.
- **Admin Seeding** — One command to create the initial admin account for a fast, hassle-free launch.
- **Cloud Ready** — Configured to work smoothly with Vercel deployments.

---

## Architecture

BlogNest follows a clear, modular layout so every part of the system has a single responsibility.

```text
BlogNest/
├── prisma/             # Database models (schema.prisma) and configuration
├── src/
│   ├── middlewares/    # Auth, error handler and not-found handler
│   ├── scripts/        # Utility scripts (e.g. admin user seeding)
│   ├── app.ts          # Express application setup
│   └── server.ts       # Application entry point
├── .env                # Environment variables
└── package.json        # Dependencies and scripts
```

**Technology stack**

| Layer | Technology | Purpose |
| :-- | :-- | :-- |
| Runtime | Node.js (v20+) | Fast, reliable JavaScript runtime for the server |
| Language | TypeScript | Type-safe code that is easier to maintain and extend |
| Framework | Express.js | Routing, middleware and HTTP request handling |
| ORM | Prisma (v7) | Schema management and safe, typed database access |
| Database | PostgreSQL | Dependable relational storage for all platform data |
| Authentication | Better Auth | Secure sign-in, sessions and Google OAuth |
| Email | Nodemailer | Transactional email delivery over SMTP |
| Dev Tooling | tsx | Instant startup with hot reload during development |

---

## Quick Start

Get BlogNest running locally in about five minutes.

**Requirements:** [Node.js](https://nodejs.org/en/) v20 or higher and a running [PostgreSQL](https://www.postgresql.org/) server.

### 1. Install

```bash
git clone https://github.com/your-username/BlogNest.git
cd BlogNest
npm install
```

### 2. Configure

Rename `.env.example` to `.env` (or create a new `.env` file in the project root) and add your values:

```env
# Database
DATABASE_URL="postgres://user:password@localhost:5432/blognest"

# Server
PORT=3000

# Add the remaining configuration here (Better Auth, SMTP credentials, etc.)
```

### 3. Prepare the database

```bash
npx prisma generate
npx prisma db push
```

### 4. Seed initial data *(optional)*

Creates the default admin account so you can start managing the platform right away.

```bash
npm run seed
```

### 5. Run

```bash
npm run dev
```

The API is now available at `http://localhost:3000`.

**Available scripts**

| Command | Description |
| :-- | :-- |
| `npm run dev` | Starts the development server with hot reload. |
| `npm run seed` | Seeds the database with the default admin configuration. |

---

## Deployment

BlogNest is ready for cloud hosting. When deploying with **Vercel**, the authentication callback must pass through the frontend domain so the OAuth state cookie is returned correctly via the frontend auth proxy.

1. Set `APP_URL` to your frontend origin:

   ```env
   APP_URL="https://blog-nest-client.vercel.app"
   ```

2. In **Google Cloud Console → OAuth settings**, add this authorized redirect URI:

   ```text
   https://blog-nest-client.vercel.app/api/auth/callback/google
   ```

---

## Support

Have a question, found an issue or need a new feature? We would be glad to help.

| Channel | Details |
| :-- | :-- |
| Issues | [Open an issue](https://github.com/your-username/BlogNest/issues) |
| Email | your-email@example.com |

Contributions and suggestions are always welcome. Feel free to open a pull request.

---

<div align="center">
  <sub>Built with care and strong typing.</sub>
</div>