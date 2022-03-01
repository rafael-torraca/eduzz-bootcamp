import Item from './components/Item';
import ItemChildren from './components/Item/itemChildren';
import Card from './components/Card';

function App() {
  return (
    <>
      <h1>Minha Primeira aplicação com ReactJS</h1>
      <ul>
        <Item text="Item 1" />
        <Item text="Item 2" />
        <Item />
        <ItemChildren>Item 3</ItemChildren>
      </ul>
      <Card />
    </>
  );
}

export default App;
