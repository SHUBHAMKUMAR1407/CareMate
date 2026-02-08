# CareMate - Doctor Appointment Booking System

CareMate is a comprehensive full-stack web application designed to streamline the process of booking doctor appointments. It features a robust architecture with three distinct user roles: **Admin**, **Doctor**, and **Patient**, ensuring a seamless experience for all stakeholders.

## 🚀 Tech Stack

- **Frontend:** React.js, Vite, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose)
- **Image Storage:** Cloudinary
- **Authentication:** JWT (JSON Web Tokens)

## ✨ Key Features

- **Three-Tier Architecture:** Separate interfaces for Admins, Doctors, and Patients.
- **Dynamic Appointment Scheduling:** Real-time slot visibility and booking management.
- **Doctor Management:** Admins can add/edit doctor profiles, specialities, and availability.
- **User Dashboard:** Patients can view booking history, status, and manage profile settings.
- **Secure Authentication:** Robust login/signup system using JWT and Bcrypt.
- **Image Handling:** Optimized image uploads and retrieval using Cloudinary.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS for mobile and desktop.

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
Navigate to the backend directory and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:
```env
PORT=4000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start the backend server:
```bash
npm start
```

### 3. Frontend Setup
Navigate to the frontend directory:
```bash
cd ../frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Admin Panel Setup
Navigate to the admin directory:
```bash
cd ../admin
npm install
```

Start the admin development server:
```bash
npm run dev
```

## 📂 Project Structure

- **admin/**: React-based dashboard for administrators.
- **backend/**: Node.js/Express API with models, controllers, and routes.
- **frontend/**: Main React application for patients to book appointments.

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements.
