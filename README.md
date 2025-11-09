# PlanGen - Smart Planning & Task Management

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-green" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-Backend-blue" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-brightgreen" alt="MongoDB" />
  <img src="https://img.shields.io/badge/Vite-Frontend-orange" alt="Vite" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" alt="License: MIT" />
</p>

---

## 📌 Introduction
**PlanGen** is a fullstack microservices project designed for **project, task, and schedule management**. It provides clean APIs, scalable architecture, and an intuitive frontend to help users plan and organize effectively.

The application uses a **microservices architecture**:
- **API Gateway** (TypeScript + Express) - Routes requests to services
- **Auth Service** (TypeScript + Express + PostgreSQL) - User authentication and authorization
- **Plan Service** (Python + FastAPI + MongoDB) - Plan management
- **Template Service** (Python + FastAPI + MongoDB) - Template management
- **Frontend** (React + TypeScript + Vite) - User interface

---

## ✨ Features
- 📅 Project & Task Management
- 👥 Multi-user Support
- 🔔 Notifications & Scheduling
- 📊 Dashboard & Analytics (planned)
- 🛡️ Secure Authentication & Authorization
- ⚡ Fast frontend powered by Vite
- 🌐 REST API backend powered by Express.js

---

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: TailwindCSS
- **State Management**: Redux Toolkit
- **Validation**: Zod

### Backend
- **API Gateway**: Express.js + TypeScript
- **Auth Service**: Express.js + TypeScript + PostgreSQL (Prisma)
- **Plan Service**: FastAPI + Python + MongoDB
- **Template Service**: FastAPI + Python + MongoDB
- **Caching**: Redis (optional for MVP)
- **Security**: Helmet, CORS, JWT

### Databases
- **PostgreSQL**: User data and authentication
- **MongoDB**: Plans and templates data

---

## 📂 Project Structure
```
PlanGen/
├── backend/
│   ├── api-gateway/          # API Gateway (TypeScript + Express)
│   │   ├── src/
│   │   │   ├── core/         # Environment, logger, shutdown
│   │   │   ├── middlewares/  # CORS, error handling, rate limiting
│   │   │   ├── proxy/        # Service proxy configuration
│   │   │   └── types/        # Type definitions
│   │   └── package.json
│   │
│   ├── services/
│   │   ├── auth-service/     # Auth Service (TypeScript + Express + PostgreSQL)
│   │   │   ├── src/
│   │   │   │   ├── controllers/
│   │   │   │   ├── services/
│   │   │   │   ├── repos/
│   │   │   │   ├── routes/
│   │   │   │   └── infrastructure/database/  # Prisma schema
│   │   │   └── package.json
│   │   │
│   │   ├── plan-service/    # Plan Service (Python + FastAPI + MongoDB)
│   │   │   ├── src/
│   │   │   │   ├── api/
│   │   │   │   ├── domain/
│   │   │   │   ├── infra/
│   │   │   │   └── types/
│   │   │   └── requirements.txt
│   │   │
│   │   └── template-service/ # Template Service (Python + FastAPI + MongoDB)
│   │       └── src/
│   │
│   └── infra/
│       └── docker/
│           └── docker-compose.yml
│
├── frontend/                 # Frontend (React + TypeScript + Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── config/
│   └── package.json
│
├── refs/                     # Planning and documentation
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 🔧 Prerequisites
Make sure you have installed:
- [Node.js 18+](https://nodejs.org/)
- [Python 3.8+](https://www.python.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/) (optional for MVP)

### ⚙️ Environment Setup

1. **Copy environment example files:**
   ```bash
   # API Gateway
   cp backend/api-gateway/.env.example backend/api-gateway/.env
   
   # Auth Service
   cp backend/services/auth-service/.env.example backend/services/auth-service/.env
   
   # Plan Service
   cp backend/services/plan-service/.env.example backend/services/plan-service/.env
   
   # Template Service
   cp backend/services/template-service/.env.example backend/services/template-service/.env
   
   # Frontend
   cp frontend/.env.example frontend/.env
   ```

2. **Update `.env` files with your configuration:**
   - Set database connection strings
   - Generate strong JWT secrets (use `openssl rand -hex 32`)
   - Configure service URLs and ports

### 🚀 Running Services

**Terminal 1 - API Gateway:**
```bash
cd backend/api-gateway
npm install
npm run dev
# Runs on http://localhost:3000
```

**Terminal 2 - Auth Service:**
```bash
cd backend/services/auth-service
npm install
npm run prisma:generate
npm run prisma:push
npm run dev
# Runs on http://localhost:3001
```

**Terminal 3 - Plan Service:**
```bash
cd backend/services/plan-service
pip install -r requirements.txt
uvicorn src.main:app --reload --port 3003
# Runs on http://localhost:3003
```

**Terminal 4 - Template Service:**
```bash
cd backend/services/template-service
pip install -r requirements.txt
uvicorn src.main:app --reload --port 3002
# Runs on http://localhost:3002
```

**Terminal 5 - Frontend:**
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### 🐳 Docker Setup (Alternative)
```bash
cd backend/infra/docker
docker-compose up -d
```

Visit the app at: `http://localhost:5173`

---

## ⚡ Deployment
- **Frontend** can be deployed on **Vercel**, **Netlify**, or **Render (Static Site)**.
- **Backend** can be deployed on **Render**, **Railway**, or **Heroku**.

Example: For Render
- Backend → Web Service (Node.js)
- Frontend → Static Site (build with `npm run build`, output = `dist`)

---

## 🧪 Scripts
**Backend**
```bash
npm run dev   # Run with nodemon (dev mode)
npm start     # Run production
```

**Frontend**
```bash
npm run dev   # Local development
npm run build # Production build
npm run preview # Preview production build
```

---

## 📖 API Documentation

### Base URL
All API requests go through the API Gateway: `http://localhost:3000/api/v1`

### Authentication Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `POST /auth/logout` - User logout
- `POST /auth/refresh` - Refresh access token

### Plan Endpoints
- `GET /plans` - Get all plans
- `GET /plans/:id` - Get plan by ID
- `POST /plans` - Create plan
- `PUT /plans/:id` - Update plan
- `DELETE /plans/:id` - Delete plan

### Template Endpoints
- `GET /templates` - Get all templates
- `GET /templates/:id` - Get template by ID
- `POST /templates` - Create template
- `PUT /templates/:id` - Update template
- `DELETE /templates/:id` - Delete template

### Health Check Endpoints
- `GET /health` - API Gateway health
- `GET /api/health` - Auth Service health
- `GET /api/health` - Plan Service health
- `GET /health` - Template Service health

(Full OpenAPI documentation coming soon)

---

## 🤝 Contributing
Contributions are welcome!
1. Fork the repo
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 👨‍💻 Author
Developed with ❤️ by [Harsh](https://github.com/hxrxhChad?tab=repositories)
