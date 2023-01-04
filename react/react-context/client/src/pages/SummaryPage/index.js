import React from 'react';

const SummaryPage = () => {
  return (
    <div>
      <form>
        <input id="confirm-checkbox" type="checkbox" />
        <label htmlFor="confirm-checkbox">주문하려는 것을 확인하셨을까요?</label>
        <br />
        <button type="submit">주문 확인</button>
      </form>
    </div>
  );
};

export default SummaryPage;
