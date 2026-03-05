# Sports Odds Dashboard

A **live sports odds dashboard** built with React and The Odds API.  
This project demonstrates real-world API integration, responsive UI, state management, and interactive features like search filtering and auto-refresh.

> ⚙️ Built as a foundational stepping stone before moving into full-stack and data analytics systems.

---

## 🚀 Features

- 🔄 Fetches real-time sports odds from a live API  
- 🏀 Select between NBA, NFL, and EPL odds  
- 🔍 Search filter to find teams quickly  
- ⏱️ Auto-refreshes data every 60 seconds  
- 📊 Responsive grid layout for all screen sizes  
- 🎛️ Loading, error, and empty state handling
- ✨ Smooth animations using Framer Motion  

---

## 🛠️ Tech Stack

| Technology | Usage |
|------------|-------|
| React (Vite) | UI library and project scaffolding |
| JavaScript (ES6+) | Core programming language |
| CSS | Custom styling |
| Framer Motion | UI animations |
| The Odds API | Real-time sports odds data |

---

## 📁 Project Structure

```plaintext
sports-odds-dashboard/
├─ src/
│  ├─ components/         # UI components like GameCard
│  ├─ pages/              # Page components like Home
│  ├─ services/           # API service logic
│  ├─ styles/             # CSS styling
│  ├─ App.jsx
│  └─ main.jsx
├─ .env                   # Environment variables (ignored in Git)
├─ .gitignore
├─ package.json
└─ README.md