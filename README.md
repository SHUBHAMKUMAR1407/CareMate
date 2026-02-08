# 🏥 CareMate - Doctor Appointment Booking System

A comprehensive full-stack MERN application for booking doctor appointments online. Features separate panels for Patients, Doctors, and Admins.

---

## 🌐 Live Demo

| Platform | Link |
|----------|------|
| 🌍 **Main Website** | [care-mate-yt9d.vercel.app](https://care-mate-yt9d.vercel.app/) |
| 🔐 **Admin Panel** | [care-mate-rust.vercel.app](https://care-mate-rust.vercel.app/) |

---

## 🚀 Tech Stack

| Frontend | Backend | Database | Cloud |
|----------|---------|----------|-------|
| React.js | Node.js | MongoDB | Cloudinary |
| Vite | Express.js | Mongoose | Vercel |
| Tailwind CSS | JWT Auth | | |

---

## ✨ Key Features

### 👤 Patient Portal
- User registration & authentication
- Browse doctors by speciality
- Book appointments with preferred time slots
- View & manage appointments
- Profile management

### 👨‍⚕️ Doctor Panel
- Secure doctor login
- Dashboard with earnings & appointment stats
- View & manage appointments
- Mark appointments as completed
- Update profile, fees & availability

### 🔐 Admin Panel
- Admin authentication
- Add new doctors with credentials
- View all appointments
- Manage doctor listings
- Dashboard with system overview

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (Local or Atlas)
- Cloudinary Account

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/CareMate.git
cd CareMate
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in `backend/`:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
```

Start server:
```bash
npm start
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env` file in `frontend/`:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Start development server:
```bash
npm run dev
```

### 4. Admin Panel Setup
```bash
cd ../admin
npm install
npm run dev
```

---

## 📂 Project Structure

```
CareMate/
├── frontend/          # Patient-facing website
├── admin/             # Admin & Doctor panel
└── backend/           # REST API server
    ├── controllers/   # Request handlers
    ├── models/        # MongoDB schemas
    ├── routes/        # API routes
    └── middlewares/   # Auth middlewares
```

---

## � API Endpoints

### User Routes
- `POST /api/user/register` - Register new user
- `POST /api/user/login` - User login
- `GET /api/user/appointments` - Get user appointments
- `POST /api/user/book-appointment` - Book appointment

### Doctor Routes
- `POST /api/doctor/login` - Doctor login
- `GET /api/doctor/dashboard` - Dashboard stats
- `GET /api/doctor/appointments` - Doctor appointments
- `POST /api/doctor/complete-appointment` - Mark complete

### Admin Routes
- `POST /api/admin/login` - Admin login
- `POST /api/admin/add-doctor` - Add new doctor
- `GET /api/admin/appointments` - All appointments
- `GET /api/admin/dashboard` - Dashboard data

---

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

⭐ **Star this repo if you find it helpful!**
