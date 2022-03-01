import { useState } from 'react';
import Button from '../Button';

function Card() {
  const successStyle = 'btn btn-success';
  const dangerStyle = 'btn btn-danger';

  const [valor, setValor] = useState(0);

  const add = () => {
    setValor(valor + 1);
  };

  const rem = () => {
    setValor(valor - 1);
  };

  return (
    <div className="card">
      <div className="card-header">
        Featured
      </div>
      <div className="card-body">
        <Button
          title="Adicionar"
          className={successStyle}
          onClick={add}
        />
        <Button
          title="Remover"
          className={dangerStyle}
          onClick={rem}
        />
        <button
          type="button"
          onClick={() => console.log('ihulll tô aprendendo React xD')}
        >
          Comemora meu fi!
        </button>
        <p>{valor}</p>
      </div>
    </div>
  );
}

export default Card;
