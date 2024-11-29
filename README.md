Task Management System
A simple Task Management System that allows users to create, view, update, and delete tasks. This project is built using Flask for the backend and HTML/CSS/JavaScript for the frontend. The system focuses on core CRUD (Create, Read, Update, Delete) operations and provides a minimal user interface for task management.
Features
Backend (Flask API):

Create a Task: Title, Description, Due Date, Status
View All Tasks
Update a Task
Delete a Task
Tasks are stored in an SQLite database.
Frontend:

Create New Task: Form for task creation.
View Tasks: Displays all tasks with options to edit and delete.
Task Filters: Filters to view tasks by their status (e.g., Pending, Completed).
Task Status Toggle: Option to toggle the task status between Pending and Completed.
Technologies Used
Backend:

Flask (Python web framework)
SQLite (Database)
Flask-SQLAlchemy (ORM for database management)
Flask-CORS (For handling Cross-Origin Requests)
Frontend:

HTML (Markup for user interface)
CSS (For styling the user interface)
JavaScript (For interacting with the backend API and handling frontend logic)
Project Structure
TaskManagementSystem/
│
├── backend/
│   ├── app.py                # Flask app with API routes
│   ├── models.py             # Task database model
│   ├── db.sqlite3            # SQLite database
│   ├── requirements.txt      # Python dependencies
│
├── frontend/
│   ├── index.html            # Main frontend HTML file
│   ├── style.css             # CSS for styling
│   ├── script.js             # JavaScript for frontend functionality
│
└── README.md                 # Project documentation
Getting Started
Step 1: Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/kalanjan/TaskManagementSystem.git
Navigate into the project directory:

cd TaskManagementSystem
Step 2: Set Up the Backend
Navigate to the backend directory:

cd backend
Create a virtual environment (optional but recommended):

python -m venv venv
Activate the virtual environment:

Windows:
venv\Scripts\activate
Mac/Linux:
source venv/bin/activate
Install the required dependencies:

pip install -r requirements.txt
Run the Flask app:

python app.py
The backend server will be running at: http://127.0.0.1:5000

Step 3: Set Up the Frontend
Navigate to the frontend directory:

cd ../frontend
Open the index.html file in your browser:

You can use VS Code's Live Server extension to open the file easily:
Right-click on index.html and select Open with Live Server.
Alternatively, open the file manually in a browser.
The frontend will now interact with the backend API to display and manage tasks.

