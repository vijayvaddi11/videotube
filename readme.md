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
