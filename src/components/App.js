import React from "react";
import Home from "./Home";
import About from "./About";
import user from "../data/user";

function App() {
  return (
    <div className="app">
      <header>
        <nav>
          {/* Navigation content */}
        </nav>
      </header>
      <main>
        <Home name={user.name} city={user.city} color={user.color} />
        <About bio={user.bio} links={user.links} />
      </main>
    </div>
  );
}

export default App;