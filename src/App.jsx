function App() {
  const isLoggedIn = true;
  const userName = "Tosin Onyemari";
  const howOld = 16;
  const sum = 2 + 3;

  return (
    <h2 style={{color :"blue"}} >Welcome
      {userName} First react + vite, connecting to Github and vercel project. <br/>
      {isLoggedIn ? "Welcome Back!" : "Please Log In"}, <br />
      You are {howOld} years old.
      The sum of 2 and 3 is {sum}.
    </h2> 
  );
}

export default App;