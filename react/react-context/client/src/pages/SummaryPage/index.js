import React, { useContext, useState } from 'react';
import { OrderContext } from '../../context/OrderContext';

const SummaryPage = ({ setStep }) => {
  const [orderData] = useContext(OrderContext);
  const [checked, setChecked] = useState(false);
  const productsArray = [...orderData.products];
  const hasOptions = orderData.options.size > 0;

  let optionDisplay = null;

  if (hasOptions) {
    const optionArray = [...orderData.options.keys()];
    optionDisplay = (
      <>
        <h2>옵션</h2>
        <ul>
          {optionArray.map((option) => {
            return <li key={option}>{option}</li>;
          })}
        </ul>
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  console.log(productsArray);
  return (
    <div>
      <h1>주문 확인</h1>
      <h2>여행 상품: {orderData.totals.products}</h2>
      <ul>
        {productsArray
          ? productsArray.map(([key, value]) => {
              return (
                <li key={key}>
                  {key}: {value}개
                </li>
              );
            })
          : ''}
      </ul>
      {optionDisplay}
      <form onSubmit={handleSubmit}>
        <input id="confirm-checkbox" checked={checked} onChange={(e) => setChecked(e.target.checked)} type="checkbox" />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨을까요?</label>
        <br />
        <button type="submit" disabled={!checked}>
          주문 확인
        </button>
      </form>
    </div>
  );
};

export default SummaryPage;
