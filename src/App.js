import React, { useState, useEffect } from 'react';
import Beer from './Beer';
import Pagination from './Pagination';
import './style.css';

const URL = 'https://api.punkapi.com/v2/beers';

export default function App() {
  const [beerData, setBeerData] = useState([]);
  const [pageState, setPageState] = useState(1);
  const [name, setName] = useState('');

  useEffect(() => {
    makeApiCall();
  }, [pageState, name]);

  const makeApiCall = async () => {
    try {
      const data = await fetch(
        `${URL}?page=${pageState}&per_page=25${
          name !== '' ? `&beer_name=${name}` : ''
        }`
      );
      const resp = await data.json();
      console.log(resp);
      setBeerData(resp);
    } catch (e) {}
  };

  return (
    <div>
      <h1>Beer List</h1>
      <div>
        <input
          type="text"
          placeholder="Search Beer !"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>

      <Pagination
        pageState={pageState}
        setPageState={setPageState}
      ></Pagination>
      {beerData.map((beer, i) => {
        return <Beer key={beer.id} {...beer}></Beer>;
      })}
    </div>
  );
}
