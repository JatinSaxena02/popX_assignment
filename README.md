# 🌐 PopX Assignment – Fullstack Authentication App

![React](https://img.shields.io/badge/Frontend-React-blue?logo=react) 
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js) 
![Express](https://img.shields.io/badge/Framework-Express-lightgrey?logo=express) 
![MongoDB](https://img.shields.io/badge/Database-MongoDB-brightgreen?logo=mongodb) 
![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)  
![Render](https://img.shields.io/badge/Deployed%20On-Render-purple?logo=render)  

---

## 📖 Overview

This is a **full-stack authentication application** built as an assignment project.  
Users can **register, login, and view their profile/dashboard** with secure authentication powered by **JWT**.  

The project is split into two parts:  
- **Frontend (React + Tailwind CSS)** → Responsive UI with Register/Login/Dashboard pages.  
- **Backend (Node.js + Express + MongoDB)** → REST APIs for user management & JWT authentication.  

---

## ✨ Features

✅ User Registration with validation  
✅ Secure Login with JWT  
✅ Dashboard with user profile details  
✅ Logout functionality  
✅ Responsive UI (Mobile + Desktop)  
✅ Backend deployed on **Render**  
✅ Frontend deployed on **Vercel/Netlify** (or your choice)  

---

## 🛠 Tech Stack

### ⚡ Frontend
- ⚛️ React  
- 🎨 Tailwind CSS  
- 🌐 Axios  
- 📍 React Router DOM  

### ⚙️ Backend
- 🟢 Node.js  
- 🚀 Express.js  
- 🔐 JWT (jsonwebtoken)  
- 🔑 bcrypt.js (password hashing)  
- 🍃 MongoDB / In-memory (for assignment use)  

---

## 📂 Folder Structure
📦 popx-assignment
┣ 📂 backend
┃ ┣ 📜 server.js
┃ ┣ 📜 routes.js
┃ ┗ 📜 ...
┣ 📂 frontend
┃ ┣ 📂 src
┃ ┃ ┣ 📂 components
┃ ┃ ┣ 📂 pages
┃ ┃ ┣ 📜 App.js
┃ ┃ ┗ 📜 index.js
┃ ┗ 📜 package.json
┣ 📜 README.md
┗ 📜 package.json

# ⚡ Getting Started

Follow these steps to set up the project on your local machine:

---

## 1️⃣ Prerequisites
Install Node.js (>= 16.x recommended)
Install npm or yarn

yaml
Copy code

---

## 2️⃣ Clone the Repository
git clone https://github.com/jatinsaxena02/popx-assignment.git
cd popx-assignment

yaml
Copy code

---

## 3️⃣ Backend Setup
cd backend
npm install
npm run dev

yaml
Copy code
✅ Backend runs on: `http://localhost:5000`

---

## 4️⃣ Frontend Setup
cd frontend
npm install
npm start

yaml
Copy code
✅ Frontend runs on: `http://localhost:3000`

---

## 5️⃣ Environment Variables

Create a `.env` file inside **backend** with the following:

SECRET_KEY=your_jwt_secret

yaml
Copy code

---

## 6️⃣ Run the Project

- Start **backend** (API server)  
- Start **frontend** (React app)  

Now open 👉 `http://localhost:3000` in your browser.

---

## 🌍 Deployment

- Backend → [Render](https://render.com)  
- Frontend → [Netlify](https://www.netlify.com)  

**Live API URL:**  
https://popx-assignment-sz6n.onrender.com

yaml
Copy code

---

✅ You’re ready to go! 🎉
