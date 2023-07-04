import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 18rem;
  color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: ${(props) => props.theme.borderPrimary};
  transition: background-color 0.1s ease-in;

  &:hover {
    cursor: pointer;
    background-color: rgba(210, 224, 84, 0.4);
  }
`;

const CharacterImage = styled.img`
  border-radius: ${(props) => props.theme.borderCircle};
  position: absolute;
  top: -40%;
  width: 13rem;
  border: ${(props) => props.theme.borderPrimary};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;
`;

const Name = styled.h1`
  font-size: 2rem;
  line-height: 1.2;
`;

const Species = styled.p`
  margin-bottom: 1rem;
`;

const statusColors = {
  alive: "#97ce4c",
  unknown: "#44281d",
  dead: "#e89ac7",
};

const Status = styled.p`
  font-size: 1.8rem;
  background-color: ${({ status }) => statusColors[status.toLowerCase()]};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.3rem 2rem;
  font-weight: 600;
`;

export const Character = ({ id, name, status, species, image, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };

  return (
    <Wrapper onClick={handleClick}>
      <CharacterImage src={image} alt="" />
      <Content>
        <Name>{name}</Name>
        <Species>{species}</Species>
        <Status status={status}>{status}</Status>
      </Content>
    </Wrapper>
  );
};
