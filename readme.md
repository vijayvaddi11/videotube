# VideoTube API 🎥

This is the backend of **VideoTube**, a video-sharing platform similar to YouTube. Built with **Node.js**, **Express.js**, and **MongoDB**, this API handles user authentication, video uploads, likes/dislikes, comments, and more.

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **File Uploads:** Multer
- **Media Hosting:** Cloudinary
- **Authentication:** JWT (JSON Web Tokens)
- **Environment Config:** dotenv

## 📦 Features

- 🔐 User registration and login (JWT-based)
- 📤 Video upload and delete (via Cloudinary)
- 🎞️ Fetch single or multiple videos
- ❤️ Like/Dislike a video
- 💬 Add and delete comments
- 🔍 Search videos by title or tags

## 📁 Project Structure
```bash
videotube/
├── controllers/     # Business logic for routes
├── models/          # Mongoose schemas
├── routes/          # API endpoints
├── middleware/      # Custom middlewares like auth
├── utils/           # Cloudinary config, file handling, etc.
├── .env             # Environment variables
└── server.js        # Entry point of the app

---

## 🔧 Setup Instructions


```bash
1. **Clone the repository:**

git clone https://github.com/vijayvaddi11/videotube.git
cd videotube



2. **Install dependencies:**

npm install


3. **Set up environment variables:**

Create a .env file in the root with the following content:

MONGO=your_mongodb_connection_string
JWT=your_jwt_secret
CLOUD_NAME=your_cloudinary_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret


4. **Run the server:**

node seeds/index.js


5. **Start the server:**

npm start

Server will be running on: http://localhost:5000
