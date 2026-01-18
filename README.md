# 🎬 Movie Explorer App

A modern **React application** that allows users to discover and search **trending movies** in real time.  
The app fetches live movie data from **TMDB (The Movie Database)** and focuses on performance, clean UI, and best frontend practices.

---

## 🚀 Features

- 🔍 **Search Movies** – Search movies by title with real-time results
- ⏳ **Debounced Search** – Optimized API calls using debouncing
- 📈 **Trending Movies** – Displays currently trending movies
- ⚡ **Fast Performance** – Prevents unnecessary API calls and re-renders
- 🧩 **Reusable Components** – Clean component-based architecture
- 🔄 **Live Data** – Uses TMDB API for up-to-date movie information

---

## 🛠️ Tech Stack

- **React**
- **JavaScript (ES6+)**
- **HTML5 & CSS3**
- **TMDB API**
- **Fetch API**
- **React Hooks**
  - `useState`
  - `useEffect`

---

## 🧠 Concepts Implemented

### 1️⃣ State Management
- Used `useState` to manage:
  - Search input
  - Movies list
  - Loading and error states

### 2️⃣ Props
- Passed data and callback functions between components
- Maintains **unidirectional data flow**

### 3️⃣ Debouncing
- Implemented debouncing to delay API calls until the user stops typing
- Improves performance and reduces unnecessary network requests

### 4️⃣ API Integration
- Fetches movie data from **TMDB**
- Handles:
  - Loading state
  - Error scenarios
  - Empty results

### 5️⃣ Conditional Rendering
- Displays loaders, error messages, or movie lists based on state

---

## 📂 Project Structure

```txt
src/
│── components/
│   ├── SearchBar.jsx
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│
│── hooks/
│   └── useDebounce.js
│
│── services/
│   └── api.js
│
│── App.js
│── index.js
