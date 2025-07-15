# 🛠️ WebRTC Video Chat App (Backend)

This is the **Express.js backend** for the WebRTC video chat application. It provides APIs for:

* Google OAuth JWT verification
* Room creation and management
* Socket.IO signaling

---

## 📁 Project Structure

```
server/
├── controllers/
├── models/
├── routes/
├── socket.js
├── .env
├── server.js
└── package.json
```

---

## 🧪 Technologies Used

* Express.js 5
* Socket.IO
* Google Auth Library
* JWT (jsonwebtoken)
* MongoDB (via Mongoose)
* UUID
* dotenv, cors, bcryptjs

---

## ⚙️ Setup Instructions

### 1️⃣ Navigate to backend folder

```bash
cd server
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
```

### 4️⃣ Run the server

```bash
npm start
```

Backend should run at: `http://localhost:5000`

---

## 📦 package.json dependencies

```json
{
  "bcryptjs": "^3.0.2",
  "cors": "^2.8.5",
  "dotenv": "^17.2.0",
  "express": "^5.1.0",
  "google-auth-library": "^10.1.0",
  "jsonwebtoken": "^9.0.2",
  "mongoose": "^8.16.3",
  "socket.io": "^4.8.1",
  "uuid": "^11.1.0"
}
```

---

## 🧠 Main Features

* Token-based authentication with Google OAuth
* Create private/public rooms with optional PIN
* Auto-room cleanup timer (when room is empty)
* Real-time signaling via Socket.IO
* Host name + user tracking

---

## 🔐 API Endpoints

```
POST /api/auth/google           # Authenticate with Google ID token
POST /api/room/create           # Create room (requires JWT)
POST /api/room/join             # Join room (requires JWT)
GET  /api/room/public           # (Socket) - Get all public rooms
```

---

## ⚡ Socket Events

* `join-room`
* `leave-room`
* `signal`
* `chat-message`
* `typing`
* `get-public-rooms`

---

## 🌐 Deployment

Use services like:

* Render.com (Free Express hosting)
* MongoDB Atlas (cloud database)
* Vercel (for frontend)

---

## 🙌 Contribution

Pull requests welcome!

---

> Built with ❤️ by Harshan MV
