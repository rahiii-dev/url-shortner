# 🔗 Shortify - URL Shortener

A modern, full-stack URL shortening application built with:

- ⚙️ **Backend**: Node.js, Express, MongoDB (with Mongoose)
- 💻 **Frontend**: React + Vite + TypeScript

---

## 📁 Project Structure

```
shortify/
├── backend/             # Express + MongoDB backend
│   └── .env-example     # Backend environment variables
│
└── frontend/
    └── shortify/        # Vite + React + TypeScript frontend
        └── .env-example # Frontend environment variables
```

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/rahiii-dev/url-shortner
cd shortify
```

---

### 2️⃣ Backend Setup (`/backend`)

#### 📦 Install dependencies:

```bash
cd backend
npm install
```

#### ⚙️ Environment Variables

Create a `.env` file from the example:

```bash
cp .env-example .env
```

**`.env-example`**
```env
NODE_ENV=development/production
EXPRESS_PORT=express-app-port[8080]
JWT_SECRET_KEY=your-jwt-secret
DATABASE_URL=your-mongo-db-url
```

#### ▶️ Run the backend:

```bash
npm run dev
```

Backend will run at: `http://localhost:8080`

---

### 3️⃣ Frontend Setup (`/frontend/shortify`)

#### 📦 Install dependencies:

```bash
cd frontend/shortify
npm install
```

#### ⚙️ Environment Variables

Create a `.env` file from the example:

```bash
cp .env-example .env
```

**`.env.example`**
```env
VITE_API_URL=http://localhost:8080/api
VITE_SHORTIFY_URL=http://localhost:8080
```

#### ▶️ Run the frontend:

```bash
npm run dev
```

Frontend will run at: `http://localhost:5173`

---

## 🚀 Features

- ✂️ Shorten long URLs
- 📊 Track clicks
- ✅ User authentication (login/register)
- 🧠 Status control (activate/deactivate links)
- 🌐 Clickable short links
- 🧩 Responsive UI built with Atomic Design

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
