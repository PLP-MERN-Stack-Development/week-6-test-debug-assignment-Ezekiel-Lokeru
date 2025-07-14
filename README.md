# 🚀 MERN Testing Project

A full-stack MERN application built with a focus on clean architecture, professional testing practices, and modular design.

---

## 💡 Tech Stack

- **MongoDB** — Document database
- **Express.js** — Backend API framework
- **React** — Frontend UI library
- **Node.js** — Server runtime
- **Vitest** + **React Testing Library** — Frontend unit & integration tests
- **Supertest** + **Jest** — Backend integration tests
- **Cypress** — End-to-end (E2E) tests (optional)

---

## 📁 Project Structure

```
mern-testing/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable React components
│   │   │   ├── Button.jsx
│   │   │   └── Posts.jsx
│   │   ├── tests/
│   │   │   ├── unit/       # Unit tests
│   │   │   │   ├── Button.test.jsx
│   │   │   │   └── Posts.test.jsx
│   │   │   └── integration/ # Integration tests
│   │   │       └── App.test.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── setupTests.js
│   └── cypress/            # E2E tests (optional)
├── server/
│   ├── models/
│   │   ├── Post.js
│   │   └── User.js
│   ├── routes/
│   │   └── postRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── utils/
│   │   └── auth.js
│   ├── app.js
│   └── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/mern-testing.git
cd mern-testing
```

### 2️⃣ Install backend dependencies

```bash
pnpm install
```

### 3️⃣ Setup environment variables

Create a `.env` file in the root of the project:

```
MONGODB_URI=mongodb://localhost:27017/mern-testing
JWT_SECRET=your_jwt_secret
PORT=5000
```

### 4️⃣ Install frontend dependencies

```bash
cd client
pnpm install
```

---

## 🏃 Running the Application

### Start backend

```bash
pnpm run dev
```

> Server runs at: **http://localhost:5000**

### Start frontend

```bash
cd client
pnpm dev
```

> Frontend runs at: **http://localhost:5173** (default Vite port)

---

## ✅ Running Tests

### Backend tests

```bash
pnpm test
```

### Frontend tests

```bash
cd client
pnpm test
```

---

## 🌟 Features

- 🛡 JWT-based authentication
- 📝 CRUD for posts
- 🗂 Category filtering for posts
- 💥 Backend integration tests using Supertest + Jest
- 🔬 Frontend unit & integration tests using Vitest + React Testing Library
- 🧪 (Optional) End-to-end tests with Cypress
- 💅 Reusable, styled Button component
- ✅ Professional folder structure

---

## 🚀 Future Improvements

- [ ] Add Cypress E2E tests
- [ ] Add global error boundaries on frontend
- [ ] Add file uploads or image support for posts

---

## 💙 Author

**Ezekiel Lokeru** — (https://github.com/Ezekiel-Lokeru)

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use, modify, and share!

---

## 🖼 Screenshots (Optional)

_Add screenshots of your UI here to showcase it visually._

---

## 🌐 Deployment (Optional)

_You can deploy your frontend to Vercel or Netlify and backend to Render or Railway._

---

## ⭐️ Show your support

If you like this project, please give it a ⭐️ on GitHub!

---