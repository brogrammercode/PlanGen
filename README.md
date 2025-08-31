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
**PlanGen** is a fullstack project designed for **project, task, and schedule management**. It provides clean APIs, scalable architecture, and an intuitive frontend to help users plan and organize effectively.

The application is split into **two parts**:
- **Backend** (Express.js + MongoDB)
- **Frontend** (Vite + modern UI)

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
- **Frontend**: Vite, React, TailwindCSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (via MongoDB Atlas or local)
- **Deployment**: Vercel / Render / Railway
- **Version Control**: Git + GitHub

---

## 📂 Project Structure
```
PlanGen/
├── backend/              # Backend service (Express + MongoDB)
│   ├── src/              # API routes, controllers, models
│   ├── server.js         # Entry point
│   └── package.json      # Backend dependencies
│
├── frontend/             # Frontend service (Vite + React)
│   ├── src/              # Components, pages, hooks
│   ├── index.html        # Entry file
│   └── package.json      # Frontend dependencies
│
├── .gitignore
├── README.md
└── package.json          # Root config (optional)
```

---

## 🚀 Getting Started

### 🔧 Prerequisites
Make sure you have installed:
- [Node.js 18+](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (or MongoDB Atlas)

### ⚙️ Backend Setup
```bash
cd backend
npm install

# Add environment variables (.env file)
PORT=5000
NODE_ENV=development
MONGO_URI=your-mongodb-uri

# Run the backend	npm start
```

### 🎨 Frontend Setup
```bash
cd frontend
npm install
npm run dev
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
API Endpoints (sample):

- `GET /api/tasks` → Get all tasks
- `POST /api/tasks` → Create a task
- `PUT /api/tasks/:id` → Update task
- `DELETE /api/tasks/:id` → Delete task

(Full documentation coming soon)

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
