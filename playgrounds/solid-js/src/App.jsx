import logo from "./logo.svg";
import styles from "./App.module.css";

function App() {
  function click() {
    console.log(
      "%cConsole Log Test===>>>: ",
      "color: MidnightBlue; background: Aquamarine; font-size: 20px;",
      "Console Log Test"
    );
  }

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <button onClick={click}>Test</button>
      </header>
    </div>
  );
}

export default App;
