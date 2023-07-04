import { CharacterList } from "../components/index";
import Logo from "../assets/Rick-And-Morty-Logo.png";
import Bg from "../assets/bg.jpeg";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  padding: 6rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::before {
    content: "";
    background-image: url(${Bg});
    background-size: cover;
    opacity: 0.1;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: -999;
  }
`;

const LogoImage = styled.img`
  width: 30%;
  margin-bottom: 8rem;

  @media (max-width: 768px) {
    width: 50%;
  }
`;

export const Landing = () => {
  return (
    <Wrapper>
      <LogoImage src={Logo} alt="" />
      <CharacterList />
    </Wrapper>
  );
};
