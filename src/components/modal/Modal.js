import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 4rem;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.borderPrimary};
  padding: 4rem;
  color: #fff;
`;

const CharacterImage = styled.img`
  border-radius: ${(props) => props.theme.borderCircle};
  width: 40%;
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const statusColors = {
  alive: "#97ce4c",
  unknown: "#44281d",
  dead: "#e89ac7",
};

const Status = styled.p`
  font-size: 1.6rem;
  background-color: ${({ status }) => statusColors[status.toLowerCase()]};
  border-radius: ${(props) => props.theme.borderRadius};
  padding: 0.3rem 2rem;
  font-weight: 600;
  width: 12rem;
  text-align: center;
`;

export const Modal = (props) => {
  return (
    <ModalOverlay onClick={props.closeModal}>
      <ModalContent>
        <CharacterImage src={props.image} alt="" />
        <CharacterInfo>
          <div>
            <h1>{props.name}</h1>
            <Status status={props.status}>{props.status}</Status>
          </div>
          <div>
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender}</p>
            <p>Location: {props.location}</p>
            <p>Origin: {props.origin}</p>
          </div>
        </CharacterInfo>
      </ModalContent>
    </ModalOverlay>
  );
};
