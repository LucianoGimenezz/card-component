import './App.css';

function App() {
  return (
    <div className="app">
      <section className="card">
        <div className="card__back">
          <p>000</p>
        </div>
        <div className="card__front">
          <div className="card___front__circles">
            <div></div>
            <div></div>
          </div>
          <div className="card__front__card-number">
            <p>0000</p>
            <p>0000</p>
            <p>0000</p>
            <p>0000</p>
          </div>
          <div className="card__front__info">
            <p>Jane Appleseed</p>
            <p>00/00</p>
          </div>
        </div>
      </section>
      <section className="form">
        <form>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input type="text" name="name" placeholder="e.g. Jane Appleseed" />
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            type="text"
            name="cardNumber"
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength="16"
          />
          <label htmlFor="cardDetails">
            <p>EXP. DATE (MM/YY)</p>
            <p>CVC</p>
          </label>
          <div className="form__details">
            <input type="number" placeholder="MM" />
            <input type="number" placeholder="YY" />
            <input type="number" placeholder="e.g. 123" />
          </div>
          <button>Confirm</button>
        </form>
      </section>
    </div>
  );
}

export default App;
