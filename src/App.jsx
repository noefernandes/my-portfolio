import NavBar from './components/NavBar';
import { createGlobalStyle, styled } from 'styled-components';
import imgBody from './assets/garoto-sembg-atual.png';

function App() {

  return (
    <div className='App'>
      <GlobalStyle />
      <Container>
        <NavBar />
        <Welcome>
          <Presentation>
            <H3>Desenvolvedor Full Stack</H3>
            <H1>Noé Fernandes</H1>
            <H2>Conheça tudo sobre mim, meus projetos e entre em contato para saber mais!</H2>
            <a href="https://www.w3docs.com">Contato</a>
          </Presentation>

          <img src={imgBody} />

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
  position: relative;
  //border: 1px solid green;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: end;
  font-size: 30px;
`;

const Presentation = styled.div`
  width: 35%;
  position: absolute;
  top: 5rem;
  left: 5rem;
  //border: 1px solid white;
  z-index: 1;
  color: white;
  text-shadow: 5px 5px 5px black;
  order: 2;

  @media (max-width: 900px) {
    width: 70%;
  }

  a {
    background-color: #0666AC;
    display: block;
    font-size: 1.5rem;
    color: #FFFFFF;
    font-weight: 500;
    padding: 1rem 4rem;
    width: 15rem;
    margin-top: 40px;
    text-shadow: none;
    text-decoration: none;
    box-shadow: 2px 2px 2px black;
    text-align: center;

    @media (max-width: 900px) {
      font-size: 1.5rem;
      width: 10rem;
      text-align: center;
      padding: 1rem;
    }

    &:hover {
      background-color: #FFFFFF;
      color: #0666AC;
    }
  }
`;

const H3 = styled.p`
  color: #39A7F8;
  font-size: 26px;
  
  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

const H1 = styled.p`
  margin-top: 20px;
  font-size: 40px;
  color: #FFFFFF;

  @media (max-width: 900px) {
    font-size: 30px;
  }
`;

const H2 = styled.p`
  margin-top: 30px;
  font-size: 30px;
  color: #FFFFFF;

  @media (max-width: 900px) {
    font-size: 25px;
  }
`;

const Ilustration = styled.img`
  width: 70%;
  order: 1;
  //border: 1px solid red;

  
`;

export default App;