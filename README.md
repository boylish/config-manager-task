# 🧩 Configuration Manager

A full-stack MERN application to **fetch a 2D Array** and **update remarks** based on a `configId`.

---

##  Features

- Fetch a 3x3 2D Array `configId`
- Update `remark` using a simple UI
- Built with **React**, **Node.js**, **Express**, and **MongoDB**
- RESTful API with clean structure
- Responsive UI using **Tailwind CSS**
- Environment variable support via `.env`

---

## 🛠️ Tech Stack

###  Frontend:
- React.js
- Axios (for HTTP requests)
- Tailwind CSS (for styling)
- React Icons (for UI icons)

###  Backend:
- Node.js
- Express.js

###  Database:
- MongoDB Atlas (cloud)
- Mongoose (ODM for MongoDB)
- MongoDB Compass (for visual exploration)

---

## 📁 Folder Structure

/frontend → React frontend
/backend → Express backend
|__ models
|__ routes
|__ server.js

---

##  Environment Setup

###  Create a `.env` file inside the `backend/` directory with the following:

```env
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net/database
PORT=8080
