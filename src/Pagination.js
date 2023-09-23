import React from 'react';

const Pagination = ({ pageState, setPageState }) => {
  return (
    <div className="page-box">
      <p>Page:</p>
      <select
        name="page"
        onChange={(e) => {
          setPageState(e.target.value);
        }}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>
  );
};
export default Pagination;
