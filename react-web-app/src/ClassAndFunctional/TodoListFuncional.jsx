import React, { useState } from 'react';

function TodoListFunctional() {
  const [items, setItems] = useState(['Tomate', 'Alface', 'Melancia']);
  const addItem = (item) => {
    setItems([...items, item]);
  };

  const removeItem = () => {
    setItems([...items.slice(1)]);
  };

  return (
    <div className="bloco-lista">
      <p>Minha Lista</p>
      <ul className="lista-estilizada">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <button type="button" onClick={() => addItem('Abobora')}>Adicionar item</button>
      <button type="button" onClick={() => removeItem()}>Remover item</button>
    </div>
  );
}

export default TodoListFunctional;
