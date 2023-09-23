import NavBar from './components/NavBar';
import { createGlobalStyle, styled } from 'styled-components';
import imgBody from './assets/cutted-image.png';

function App() {

  return (
    <div className='App'>
      <GlobalStyle />
      <Container>
        <NavBar />
        <Welcome>
          sds
        </Welcome>
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
  align-items: center;
  flex-direction: column;
  background-color: #0C1242;
  overflow: hidden;
`;

const Welcome = styled.div`
  width: 90%;
  height: auto;
  background-color: blue;
`;

const Presentation = styled.div`

`;

const Ilustration = styled.div`
  
`;

export default App;