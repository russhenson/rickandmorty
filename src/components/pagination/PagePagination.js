import styled from "styled-components";
import LeftArr from "../../assets/arrow-left.svg";
import RightArr from "../../assets/arrow-right.svg";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 6rem;
`;

const NavButton = styled.button`
  background-color: transparent;
  border: ${(props) => props.theme.borderPrimary};
  border-radius: ${(props) => props.theme.borderCircle};
  cursor: pointer;
  padding: 2rem;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: rgba(210, 224, 84, 0.4);
  }
`;

const PrevButton = styled(NavButton)`
  border: 2px solid
    ${(props) =>
      props.page === 1 ? "rgba(210, 224, 84, 0.4)" : props.theme.borderPrimary};
  cursor: ${(props) => (props.page === 1 ? "default" : "pointer")};

  &:hover {
    background-color: ${(props) =>
      props.page === 1 ? "transparent" : "rgba(210, 224, 84, 0.4)"};
  }
`;

const NextButton = styled(NavButton)`
  border: 2px solid
    ${(props) =>
      props.page === props.totalpages
        ? "rgba(210, 224, 84, 0.4)"
        : props.theme.borderPrimary};
  cursor: ${(props) => (props.totalpages === 1 ? "default" : "pointer")};

  &:hover {
    background-color: ${(props) =>
      props.page === props.totalpages
        ? "transparent"
        : "rgba(210, 224, 84, 0.4)"};
  }
`;

export const PagePagination = (props) => {
  return (
    <Wrapper>
      <PrevButton page={props.page} onClick={props.handlePrevious}>
        <img
          style={props.page === 1 ? { opacity: "0.4" } : {}}
          src={LeftArr}
          alt=""
        />
      </PrevButton>
      <NextButton
        page={props.page}
        totalpages={props.totalPages}
        onClick={props.handleNext}
      >
        <img
          style={props.page === props.totalPages ? { opacity: "0.4" } : {}}
          src={RightArr}
          alt=""
        />
      </NextButton>
    </Wrapper>
  );
};
