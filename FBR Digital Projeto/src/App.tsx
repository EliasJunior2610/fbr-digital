import "./App.css";
import Login from "./components/Login/Login";
import Header from "./components/Header/header";

function App() {
  return (
    <div className="App-container">
      <header>
        <Header />
      </header>
      <main>
        <Login />
      </main>
    </div>
  );
}

export default App;
