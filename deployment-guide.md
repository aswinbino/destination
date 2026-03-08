# Destination - Deployment & Setup Guide

This guide helps you deploy the MREN Stack application "Destination".

## Prerequisites
- Node.js (v18+)
- MongoDB Atlas Account or Local MongoDB Instance
- Stripe/Razorpay accounts (for payment simulation)

## Environment Setup
1. Backend:
   - Navigate to `/server`
   - Copy `.env.example` to `.env`
   - Update `MONGO_URI` and `JWT_SECRET`.

2. Frontend:
   - Navigate to `/client`
   - Create `.env` file and add `VITE_API_BASE_URL=http://localhost:5000/api`

## Running Locally

**Terminal 1: Start Backend**
```bash
cd server
npm install
npm run dev
```

**Terminal 2: Start Frontend**
```bash
cd client
npm install
npm run dev
```

## Production Deployment (Vercel + Render/Heroku)

**1. Deploy Backend (Render/Heroku):**
- Push your `/server` to a GitHub repo.
- Connect to Render Web Service.
- Set build command to `npm install` and start to `node server.js`.
- Add environment variables (MONGO_URI, JWT_SECRET, etc.).

**2. Deploy Frontend (Vercel/Netlify):**
- Push your `/client` to a GitHub repo.
- Connect to Vercel.
- Framework Preset: Vite.
- Set Environment Variable `VITE_API_BASE_URL` pointing to your deployed backend URL.
- Deploy.

## Architecture Notes
- The application uses `Socket.io` for real-time ride tracking. Ensure your backend host supports WebSockets (standard for Render/AWS/DigitalOcean).
- AI logic (trust score changes, CO2 savings, and route matching) is simulated within the `/server/services/aiSimulation.js` service.
