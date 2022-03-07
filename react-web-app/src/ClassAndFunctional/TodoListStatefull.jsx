/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

class TodoListStatefull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        'Tomate',
        'Alface',
        'Melancia',
      ],
    };
  }

  addItem = (item) => {
    this.setState({ items: [...this.state.items, item] });
  };

  removeItem = () => {
    this.setState({ items: [...this.state.items.slice(1)] });
  };

  render() {
    const { items } = this.state;
    return (
      <div className="bloco-lista">
        <p>Minha Lista ClassName</p>
        <ul className="lista-estilizada">
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
        <button type="button" onClick={() => this.addItem('Abobora')}>Adicionar item</button>
        <button type="button" onClick={() => this.removeItem()}>Remover item</button>
      </div>
    );
  }
}

export default TodoListStatefull;

/**
 * Não possui gerenciamento de estados no componente
 * Construídos usando funções em JS
 */
