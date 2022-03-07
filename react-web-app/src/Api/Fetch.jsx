/* eslint-disable react/no-array-index-key */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react';

function Fetch() {
  const [cientistas, setCientistas] = useState([]);

  useEffect(() => {
    fetch('https://react-intermediario-dio.free.beeceptor.com/cientistas-brasileiras')
      .then((response) => response.json())
      .then((data) => {
        setCientistas(data);
      })
      .catch((error) => {
        alert(`Ops! Erro a seguir: ${error}`);
      });
  }, []);

  return (
    <>
      <h1>Cientistas Brasileiras</h1>
      <ul>
        {cientistas.map((cientista, index) => (
          <div key={index}>
            <li>
              Nome:
              {cientista.name}
            </li>
            <li>
              Área:
              {cientista.area}
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}

export default Fetch;
