# 🔔 Notification Service (MERN Stack)

A full-stack Notification Service built with **MongoDB, Express, React, and Node.js**. This app allows users to send and view notifications via **Email**, **SMS**, and **In-App** channels.

> Bonus features include retry logic and optional message queue integration (e.g., RabbitMQ or Redis).

---

## 📌 Features

- Send notifications via:
  - 📧 Email
  - 📱 SMS
  - 🖥️ In-app
- View all notifications for a specific user
- Retry logic for failed notifications
- RESTful APIs using Express
- Optional: Queue system for async processing (e.g., RabbitMQ, Redis)

---

## ⚙️ Tech Stack

| Layer     | Technology                  |
|----------|------------------------------|
| Frontend | React, Axios, CSS            |
| Backend  | Node.js, Express, MongoDB    |
| Database | MongoDB, Mongoose            |

---


## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Laxmirlola/notification-service.git
cd notification-service
```
### 2️⃣ Backend Setup
```bash
cd server
npm install
```
Start Backend
```bash
node server.js
# or with nodemon
npx nodemon server.js
```
### 3️⃣ Frontend Setup
```bash
cd client
npm install
npm start
```
---

## ❓Assumptions

- Email and SMS delivery simulated (not integrated with Twilio/SendGrid).

- All users are uniquely identified by a simple userId.

- Notifications stored and queried from MongoDB.
---

## 🧑‍💻 Author
Laxmirlola Behera

KIIT University – Dept. of Computer Science

📧 [laxmirlolabehera@gmail.com]
