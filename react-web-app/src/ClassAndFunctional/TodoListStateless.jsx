import React from 'react';

function TodoListStateless({ items }) {
  return (
    <div className="bloco-lista">
      <p>Minha lista Stateless</p>
      <ul className="lista-estilizada">
        {items.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  );
}

export default TodoListStateless;

/**
 * Não tinha controle de estados antes da chegada dos Hooks.
 */
