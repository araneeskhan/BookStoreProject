# 📚 Book Store MERN Stack Project

A modern, full-stack web application for managing a book collection, built with the MERN (MongoDB, Express.js, React, Node.js) stack.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- 📖 Create, Read, Update, and Delete books
- 🎨 Modern and responsive UI with Tailwind CSS
- 🌓 Dark mode support
- 📱 Mobile-friendly design
- 🔍 Advanced search and filtering
- 📊 Book statistics dashboard
- 📤 Export data to CSV/JSON
- ⚡ Fast and optimized performance

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/araneeskhan/BookStoreProject.git
   cd BookStoreProject
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

4. Create a `.env` file in the backend directory:
   ```env
   PORT=5555
   MONGODB_URL=your_mongodb_connection_string
   NODE_ENV=development
   ```

### Running the Application

1. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

2. Start the frontend development server:
   ```bash
   cd frontend
   npm run dev
   ```

## 🏗️ Project Structure

```
BookStoreProject/
├── backend/
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── requestLogger.js
│   ├── models/
│   │   └── bookModel.js
│   ├── routes/
│   │   └── bookRoutes.js
│   ├── config.js
│   └── index.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── books/
    │   │   └── common/
    │   ├── hooks/
    │   ├── utils/
    │   └── App.jsx
    ├── index.html
    └── tailwind.config.js
```

## 🛠️ Tech Stack

### Backend
- **Node.js & Express.js**: Server framework
- **MongoDB & Mongoose**: Database
- **CORS**: Cross-Origin Resource Sharing
- **Error Handling**: Custom middleware
- **Request Logging**: Activity tracking

### Frontend
- **React (Vite)**: UI framework
- **Tailwind CSS**: Styling
- **React Icons**: Icon library
- **Custom Hooks**: State management
- **Context API**: Global state
- **Responsive Design**: Mobile-first approach

## 📝 API Endpoints

| Method | Endpoint    | Description          |
|--------|------------|---------------------|
| GET    | /books     | Get all books       |
| GET    | /books/:id | Get a specific book |
| POST   | /books     | Create a new book   |
| PUT    | /books/:id | Update a book       |
| DELETE | /books/:id | Delete a book       |

## 🌟 Key Features

### Book Management
- Add new books with title, author, and year
- Update existing book information
- Remove books from the collection
- View detailed book information

### User Interface
- Responsive design for all devices
- Dark mode for comfortable viewing
- Interactive components
- Smooth animations
- User-friendly notifications

### Data Handling
- Advanced search functionality
- Sort books by various criteria
- Filter books by year or author
- Export data in CSV/JSON formats
- Efficient data caching

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- MongoDB for the database solution
- React team for the amazing framework
- Tailwind CSS for the styling utilities
- All contributors who helped improve this project
```

This README now includes:
- Clear project structure
- Detailed installation steps
- Well-organized sections
- Proper code formatting
- Comprehensive feature list
- Tech stack details
- API documentation
- Contributing guidelines
- License information
- Acknowledgments

Would you like me to add or modify any specific section?