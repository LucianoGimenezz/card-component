import { useState } from 'react';
import './App.css';

function App() {
  const [details, setDetails] = useState({
    cardName: 'Jane Appleseed',
    cardYear: '00',
    cardMonth: '00',
    cardCVC: '000',
    cardNumber: '0000 0000 0000 0000',
  });

  const handleDetails = (e) => {
    let chain = '';
    let result = [];
    for (let index = 0; index < e.target.value.length; index++) {
      if (chain.length === 4) {
        result.push(chain);
        chain = '';
      }
      chain = chain.concat(e.target.value[index]);
    }
    result.push(chain);
    setDetails({ ...details, cardNumber: result.join(' ') });
  };

  return (
    <div className="app">
      <section className="card">
        <div className="card__back">
          <p>{details.cardCVC}</p>
        </div>
        <div className="card__front">
          <div className="card___front__circles">
            <div></div>
            <div></div>
          </div>
          <div className="card__front__card-number">
            <p>{details.cardNumber.slice(0, 4)}</p>
            <p>{details.cardNumber.slice(5, 9)}</p>
            <p>{details.cardNumber.slice(10, 14)}</p>
            <p>{details.cardNumber.slice(15, 19)}</p>
          </div>
          <div className="card__front__info">
            <p>{details.cardName}</p>
            <p>
              {details.cardMonth}/{details.cardYear}
            </p>
          </div>
        </div>
      </section>
      <section className="form">
        <form>
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            onChange={(e) =>
              setDetails({ ...details, cardName: e.target.value })
            }
            type="text"
            name="name"
            placeholder="e.g. Jane Appleseed"
          />
          <label htmlFor="cardNumber">CARD NUMBER</label>
          <input
            onChange={handleDetails}
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
            <input
              onChange={(e) =>
                setDetails({ ...details, cardMonth: e.target.value })
              }
              type="text"
              placeholder="MM"
              maxLength="2"
            />
            <input
              onChange={(e) =>
                setDetails({ ...details, cardYear: e.target.value })
              }
              type="text"
              placeholder="YY"
              maxLength="2"
            />
            <input
              onChange={(e) =>
                setDetails({ ...details, cardCVC: e.target.value })
              }
              type="text"
              placeholder="e.g. 123"
              maxLength="3"
            />
          </div>
          <button>Confirm</button>
        </form>
      </section>
    </div>
  );
}

export default App;
