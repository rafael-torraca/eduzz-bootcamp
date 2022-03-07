import styled from 'styled-components';
import InProps from './StylesReact/InProps';
import TodoListStatefull from './ClassAndFunctional/TodoListStatefull';
// import TodoListStateless from './ClassAndFunctional/TodoListStateless';
import TodoListFunctional from './ClassAndFunctional/TodoListFuncional';
import Fetch from './Api/Fetch';
import './App.css';

const divStyle = {
  color: 'blue',
};

// styled components
const DivStyle = styled.div`
  color: #32b839;
  background-color: black;
`;

function App() {
  return (
    <>
      <p style={divStyle}>Inline</p>
      <InProps style={divStyle} />
      <h1 className="importing-css">Importing CSS</h1>
      <DivStyle>
        aloha
      </DivStyle>
      <p>------------------------------</p>
      <p>Class Components</p>
      <TodoListStatefull />
      {/* <TodoListStateless /> */}
      <p>Function Components</p>
      <TodoListFunctional />
      <p>-------------------------------</p>
      <Fetch />
    </>
  );
}

export default App;
