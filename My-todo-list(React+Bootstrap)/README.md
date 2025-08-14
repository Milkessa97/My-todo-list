📋 My To-Do List (React + TypeScript)

A simple To-Do List web application built with React, TypeScript, and Bootstrap.
This app lets users add, delete, and mark tasks as complete using a clean, responsive interface.

🚀 Features

  ➕ Add Tasks – Create new tasks using a simple form.
  
  ✅ Mark as Complete – Use checkboxes to track completed tasks.
  
  ❌ Delete Tasks – Remove unwanted tasks instantly.
  
  🧩 Component-based Structure – Clear separation of concerns with TaskItem and TaskList components.

🛠️ Tech Stack

  Frontend Framework: React (with TypeScript)
  
  Styling: Bootstrap 5
  
  State Management: React Hooks (useState)
  
  Folder Structure:

src/
  ├── components/
  │     ├── TaskItem.tsx
  │     └── TaskList.tsx
  ├── App.tsx
  ├── main.tsx
  └── App.css

📦 Installation & Setup
  1. Clone the repository
git clone https://github.com/yourusername/my-todo-list.git
  
  2. Go into the project directory
cd my-todo-list
  
  4. Install dependencies
npm install
  
  5. Start the development server
npm run dev

📖 How It Works

  TaskItem.tsx
  
    Contains a form with a text input for the task description and a delete button.
    
    Handles new task creation.
  
  TaskList.tsx
  
    Receives tasks as props and displays them as a list.
    
    Each task includes a checkbox to mark it complete.

🔮 Future Improvements

  🌙 Dark Mode toggle
  
  📂 Task categories/tags
  
  💾 LocalStorage persistence
  
  📅 Due dates & reminders

📜 License

This project is licensed under the MIT License.
