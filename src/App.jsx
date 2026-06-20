function App() {
  const isLoggedIn = true;
  const userName = "Mr Charles";
  const howOld = 16;
  const sum = 2 + 3;

  return (
    <h2 style={{color :"blue"}} >Welcome,
      {userName} to tosin's First react + vite, connecting to Github and vercel project. <br/>
      {isLoggedIn ? "Welcome Back!" : "Please Log In"}, <br />
      I am {howOld} years old. <br/>
      The sum of 2 and 3 is {sum}.
    </h2> 
  );
}

export default App;