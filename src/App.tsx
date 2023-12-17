import { CurrencyName } from "./components/CurrencyName";
import { CurrencyValue } from "./components/CurrencyValue";
import "./App.css";
import { CurrencyAbreviation } from "./components/CurrencyAbreviation";
import { ConvertButton } from "./components/ConvertButton";

function App() {
  return (
    <main>
      <section className="background-top">
        <div className="top-content">
          <CurrencyName variant="primary" name="US Dólar" />
          <CurrencyValue variant="primary" value={271} />
          <CurrencyAbreviation variant="primary" name="USD" />
        </div>
      </section>
      <section className="convert-button-section">
        <ConvertButton />
      </section>
      <section className="background-bottom">
        <div className="bottom-content">
          <CurrencyAbreviation variant="secondary" name="BRL" />
          <CurrencyValue variant="secondary" value={832} />
          <CurrencyName variant="secondary" name="BRL Real" />
        </div>
      </section>
    </main>
  );
}

export default App;
