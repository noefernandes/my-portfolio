import NavBar from './components/NavBar';
import { createGlobalStyle, styled } from 'styled-components';
import imgBody from './assets/cutted-image.png';

function App() {

  return (
    <div className='App'>
      <GlobalStyle />
      <Container>
        <NavBar />
        <Body>

        </Body>
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
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #0C1242;
`;

const Body = styled.div`
  width: 100%;
  height: auto;
`;

export default App;