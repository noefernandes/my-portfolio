import NavBar from './components/NavBar';
import { createGlobalStyle, styled } from 'styled-components';
import Welcome from './components/Welcome';
import Projects from './components/Projects';

function App() {

  return (
    <div className='App'>
      <GlobalStyle />
      <Container>
        <NavBar />
        <Welcome />
        <Projects />
      </Container>
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Patua One', cursive;
  }
`;

const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #0C1242;
  overflow: hidden; 
`;

export default App;