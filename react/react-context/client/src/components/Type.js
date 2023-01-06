import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Type = ({ orderType }) => {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/${orderType}`);
      console.log(data);
      setItems(data);
      return data;
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div>
      {items ? <h2>{items[0].description}</h2> : ''}
      <p>하나의 가격</p>
      <p>총 가격</p>
      <div
        style={{
          display: 'flex',
          flexDirection: orderType === 'options' ? 'column' : 'row',
        }}
      ></div>
    </div>
  );
};

export default Type;
