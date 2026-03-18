# Destination - Smart Ride-Sharing & Fleet Management

Destination is a comprehensive MERN stack application designed for smart ride-sharing, fleet management, and real-time transit tracking. It includes a modern Vite frontend, a robust Express backend with Socket.io, and a Next.js explorer.

## 📁 Project Structure

This repository is organized into three main components:

- **`/client`**: The primary user interface built with React and Vite. Features real-time tracking, ride search, and dashboard.
- **`/server`**: The backend API built with Node.js and Express. Handles authentication, ride management, and real-time socket communication.
- **`/app-next`**: A Next.js implementation of the Destination Explorer, providing an alternative/enhanced UI.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas or local MongoDB instance
- Environment variables configured (see subdirectories)

### Local Setup

1. **Install all dependencies:**
   ```bash
   npm run setup
   ```

2. **Run the Backend:**
   ```bash
   cd server
   npm run dev
   ```

3. **Run the Frontend (Vite):**
   ```bash
   cd client
   npm run dev
   ```

4. **Run the Next.js App (Alternative):**
   ```bash
   cd app-next
   npm run dev
   ```

## ☁️ Deployment

### Frontend (Vercel)

The project is configured for easy deployment on Vercel from the root directory.

1. Connect your GitHub repository to Vercel.
2. The `vercel.json` and root `package.json` are pre-configured to build the `/client` directory.
3. Add environment variables in Vercel:
   - `VITE_API_BASE_URL`: URL of your deployed backend.

### Backend (Render/Heroku/AWS)

The backend should be deployed to a platform that supports persistent processes (required for Socket.io).

1. Deploy the `/server` directory.
2. Start Command: `npm start` (or `node server.js`).
3. Add environment variables: `MONGO_URI`, `JWT_SECRET`, `CLIENT_URL`.

## 🛠 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Framer Motion
- **Backend:** Node.js, Express, MongoDB, Socket.io
- **Explorer:** Next.js, TanStack Query, Zustand

---
Built with ❤️ by Aswin Bino
