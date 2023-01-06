import React from 'react';

const Products = ({ name, imagePath, updateItemCount }) => {
  const handleChange = (e) => {
    const currentValue = e.target.value;
    updateItemCount(name, currentValue);
  };
  return (
    <div style={{ textAlign: 'center' }}>
      <img style={{ width: '75%' }} alt="product" src={`http://localhost:4000/${imagePath}`} />
      <form style={{ marginTop: '10px' }}>
        <label style={{ textAlign: 'right' }}>{name}</label>
        <input
          style={{ marginLeft: 7 }}
          type="number"
          defaultValue={0}
          min="0"
          name="quantitiy"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Products;
