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
  
<img width="1919" height="1149" alt="Screenshot 2025-08-14 003044" src="https://github.com/user-attachments/assets/b291ad77-6a05-4615-99ef-3f89c48efded" />
<img width="1919" height="1088" alt="Screenshot 2025-08-14 003143" src="https://github.com/user-attachments/assets/46d50060-ad74-455e-8718-e4a20baff099" />
<img width="1919" height="1149" alt="Screenshot 2025-08-14 003156" src="https://github.com/user-attachments/assets/7b742553-2af8-4d61-a3de-9d1caca58630" />
<img width="1919" height="1150" alt="Screenshot 2025-08-14 003207" src="https://github.com/user-attachments/assets/f71b99d1-ab2e-4df2-9357-dd32505b8ce6" />

🔮 Future Improvements

  🌙 Dark Mode toggle
  
  📂 Task categories/tags
  
  💾 LocalStorage persistence
  
  📅 Due dates & reminders

📜 License

This project is licensed under the MIT License.
