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

## 📸 Scrrenshots

1- ![Screenshot 2025-06-20 115358](https://github.com/user-attachments/assets/e8ad58cf-08c4-4eaf-9b20-df65be55b34c)


2- ![Screenshot 2025-06-20 115449](https://github.com/user-attachments/assets/6add39bb-bb49-4fb9-9225-79a5a31bd1a3)


3- ![Screenshot 2025-06-20 115530](https://github.com/user-attachments/assets/ffaecb53-acb0-43ef-85b3-9fc60358139b)


4-
 ![Screenshot 2025-06-20 115750](https://github.com/user-attachments/assets/c40a2df6-5342-4f0d-a964-9f5c536a57bb)



---

## 📁 Folder Structure

- /frontend → React frontend
- /backend → Express backend
  - /models
  - /routes
  - server.js

---

##  Environment Setup

###  Create a `.env` file inside the `backend/` directory with the following:

```env
MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster.mongodb.net/database
PORT=8080
