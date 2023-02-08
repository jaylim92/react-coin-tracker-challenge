import Router from './Router';
import { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
}
a {
    text-decoration: none;
    color: ${(props) => props.theme.textColors};
  }
body{
  background-color: ${(props) => props.theme.bgColors};
  color: ${(props) => props.theme.textColors}
}
`;

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Router></Router>
    </>
  );
}

export default App;
