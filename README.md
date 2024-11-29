# 📋 Task Management System

<div align="center">
  <img src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072" width="600" alt="Task Management Banner"/>

  [![Made with Flask](https://img.shields.io/badge/Made%20with-Flask-black?style=for-the-badge&logo=flask)](https://flask.palletsprojects.com/)
  [![Database](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)](https://www.sqlite.org/)
  [![Frontend](https://img.shields.io/badge/Frontend-HTML%2FCSS%2FJS-yellow?style=for-the-badge)](https://developer.mozilla.org/)
</div>

## 🌟 Features

### Backend API
- ✨ **Create Tasks** - Add new tasks with title, description, due date, and status
- 📝 **View Tasks** - Retrieve all tasks or filter by status
- 🔄 **Update Tasks** - Modify existing task details
- 🗑️ **Delete Tasks** - Remove unwanted tasks
- 💾 **SQLite Database** - Persistent storage with SQLAlchemy ORM

### Frontend Interface
- 🎨 **Modern UI/UX** - Clean and intuitive user interface
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile
- 🔍 **Task Filters** - Filter tasks by status (Pending/Completed)
- ⚡ **Real-time Updates** - Instant feedback on task modifications

## 🛠️ Tech Stack

### Backend
- **Flask** - Lightweight WSGI web application framework
- **SQLite** - Self-contained, serverless database
- **Flask-SQLAlchemy** - ORM for database operations
- **Flask-CORS** - Cross-Origin Resource Sharing support

### Frontend
- **HTML5** - Structure and semantics
- **CSS3** - Modern styling with Flexbox/Grid
- **JavaScript** - Dynamic client-side functionality

## 📁 Project Structure

\`\`\`
TaskManagementSystem/
├── backend/
│   ├── app.py           # Flask application & API routes
│   ├── models.py        # Database models
│   ├── db.sqlite3       # SQLite database
│   └── requirements.txt # Python dependencies
│
├── frontend/
│   ├── index.html      # Main HTML interface
│   ├── style.css       # Styling definitions
│   └── script.js       # Frontend logic
│
└── README.md           # Project documentation
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Python 3.8+
- Modern web browser
- Git (optional)

### Installation

1. **Clone the Repository**
   \`\`\`bash
   git clone https://github.com/yourusername/TaskManagementSystem.git
   cd TaskManagementSystem
   \`\`\`

2. **Set Up Backend**
   \`\`\`bash
   cd backend
   python -m venv venv

   # Activate virtual environment
   # Windows:
   venv\Scripts\activate
   # macOS/Linux:
   source venv/bin/activate

   # Install dependencies
   pip install -r requirements.txt

   # Start the server
   python app.py
   \`\`\`

3. **Launch Frontend**
   - Navigate to the \`frontend\` directory
   - Open \`index.html\` in your browser
   - For development, use VS Code's Live Server extension

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | /tasks   | Retrieve all tasks |
| POST   | /tasks   | Create a new task |
| PUT    | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## 💡 Usage Examples

### Creating a Task
\`\`\`javascript
fetch('http://localhost:5000/tasks', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'Complete Project',
    description: 'Finish the task management system',
    due_date: '2024-03-20',
    status: 'pending'
  })
});
\`\`\`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Flask documentation and community
- SQLAlchemy documentation
- Mozilla Developer Network (MDN) for frontend resources
