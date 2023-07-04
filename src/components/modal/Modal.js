import styled from "styled-components";
import CloseIcon from "../../assets/x.svg";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: ${(props) => props.theme.borderRadius};
  border: ${(props) => props.theme.borderPrimary};
  padding: 4rem;
  color: #fff;
  position: relative;
`;

const CharacterImage = styled.img`
  border-radius: ${(props) => props.theme.borderCircle};
  width: 60%;
`;

const CharacterInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
`;

const Name = styled.h1`
  text-align: center;
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
  text-align: center;
`;

const Info = styled.p`
  background-color: rgba(210, 224, 84, 0.5);
  border-radius: ${(props) => props.theme.borderRadius};
  overflow: hidden;
  margin-bottom: 1rem;
  padding-right: 1.5rem;

  span {
    background-color: rgb(4, 63, 71, 0.5);
    display: inline-block;
    width: 10rem;
    padding: 0.5rem 1.5rem 0.5rem 0;
    margin-right: 2rem;
    font-weight: 600;
    text-align: right;
  }
`;

const Close = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Modal = (props) => {
  return (
    <ModalOverlay onClick={props.closeModal}>
      <ModalContent>
        <Close onClick={props.closeModal} src={CloseIcon} alt="" />
        <CharacterImage src={props.image} alt="" />
        <CharacterInfo>
          <div>
            <Name>{props.name}</Name>
            <Status status={props.status}>{props.status}</Status>
          </div>
          <div>
            <Info>
              <span>Species</span>
              {props.species}
            </Info>
            <Info>
              <span>Gender</span>
              {props.gender}
            </Info>
            <Info>
              <span>Location</span>
              {props.location}
            </Info>
            <Info>
              <span>Origin</span>
              {props.origin}
            </Info>
          </div>
        </CharacterInfo>
      </ModalContent>
    </ModalOverlay>
  );
};
