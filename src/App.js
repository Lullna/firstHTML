import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <button type="button" class="custom-button">
          SEARCH!
        </button>
      </div>

      <div class="topnav">
        <a class="active" href="#home">
          Home
        </a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <input type="text" placeholder="Search.."></input>
      </div>
    </div>
  );
}
