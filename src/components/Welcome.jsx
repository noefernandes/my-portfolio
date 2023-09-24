import imgBody from '../assets/garoto-sembg-atual.png';
import { styled } from 'styled-components';

const Welcome = () => {
  return (
    <Wrapper>
      <Presentation>
        <H3>Desenvolvedor Full Stack</H3>
        <H1>Noé Fernandes</H1>
        <H2>Conheça tudo sobre mim, meus projetos e entre em contato para saber mais!</H2>
        <Button href="https://www.w3docs.com">Contato</Button>
        <SocialMediaIcon></SocialMediaIcon>
      </Presentation>
      <img src={imgBody} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
  top: 7rem;
  left: 5rem;
  //border: 1px solid white;
  color: #FFFFFF;
  text-shadow: 5px 5px 5px black;

  @media (max-width: 900px) {
    width: 70%;
  }
`;

const Button = styled.a`
  display: inline-block;
  background-color: #0666AC;
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

  &:hover {
    background-color: #FFFFFF;
    color: #0666AC;
  } 

  @media (max-width: 900px) {
    font-size: 1.5rem;
    width: 10rem;
    text-align: center;
    padding: 1rem;
    cursor: pointer;
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

const SocialMediaIcon = styled.a`
    padding: 20rem 20rem;
`;

export default Welcome;