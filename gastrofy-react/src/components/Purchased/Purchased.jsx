import React from 'react';
import './Purchased.css';
import plus from '../../assets/plus.png';
import arrow from '../../assets/arrow.png';

function Purchased() {
  return (
    <div className="purchasedMain">
      <div className="purchasedMainWrapper">
        <h3>Köpta recept</h3>
        <p>
          Här kommer recepten som du köpt hem att synas. På så sätt kan du
          enkelt hitta de recepten då det är dags att <br /> laga dina rätter.
        </p>
        <p>
          Här kommer du även kunna kunna dela dina recept med familj eller
          vänner som hjälper till med matlagningen <br /> där hemma.
        </p>
        <p>Så här gör du för att köpa hem recept:</p>
        <div className="plusList">
          <img src={plus} alt="plus" className="plus" />
          <ol>
            <li>
              <span>Lägg till receptet</span> i din meny
            </li>
            <li>
              <span>Anpassa</span> eller byt ut receptets varor
            </li>
            <li>
              <span>Beställ hem</span>
            </li>
            <li>
              <span>Laga,</span> ät och var glad
            </li>
          </ol>
          <img src={arrow} alt="arrow" className="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Purchased;
