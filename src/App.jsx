import "./App.css";

function App() {
  const isLoggedIn = true;
  const userName = "Mr Charles";
  const howOld = 16;
  const sum = 2 + 3;

  return (
    <div className="app-shell">
      <main className="app-card">
        <h1>Welcome, {userName}!</h1>
        <p className="app-intro">
          This is my first React + Vite app, connecting to GitHub and Vercel.
        </p>

        <div className={`status-badge {isLoggedIn ? "online" : "offline"}`}>
          {isLoggedIn ? "Logged in" : "Please log in"}
        </div>

        <ul className="app-details">
          <li>I am {howOld} years old.</li>
          <li>The sum of 2 and 3 is {sum}.</li>
        </ul>
      </main>
    </div>
  );
}

export default App;