import styled from 'styled-components';
import InProps from './StylesReact/InProps';
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
    </>
  );
}

export default App;
