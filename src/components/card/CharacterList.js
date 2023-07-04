import styled from "styled-components";
import { useState, useEffect } from "react";
import { getAllCharacters, getOneCharacter } from "../../api/api";

import { Modal } from "../modal/Modal";
import { Character } from "./Character";
import { PagePagination } from "../pagination/PagePagination";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 6rem;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 10rem;
  width: 100%;
  column-gap: 4rem;
  margin-bottom: 8rem;
  position: relative;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 670px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [characterData, setCharacterData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { characters, totalPages } = await getAllCharacters(page);
        setCharacters(characters);
        setTotalPages(totalPages);
      } catch (err) {
        console.error(err);
      }
    })();
  }, [page]);

  const handleCharacterClick = async (id) => {
    try {
      // Fetch the single character data using the ID
      const characterData = await getOneCharacter(id);
      setCharacterData(characterData);
      setIsModalOpen(true);
      console.log(characterData);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <Wrapper>
      {characters.length === 0 && (
        <h1 style={{textAlign: 'center', color: '#FFF'}}>
          Oops! We are currently unable to retrieve the requested data from our
          API. Please try again later.
        </h1>
      )}

      <ListWrapper>
        {characters.map((item, i) => (
          <Character
            key={i}
            id={item.id}
            name={item.name}
            status={item.status}
            species={item.species}
            image={item.image}
            onClick={handleCharacterClick}
          />
        ))}
      </ListWrapper>

      <PagePagination
        page={page}
        totalPages={totalPages}
        handlePrevious={() => handlePageChange(page - 1)}
        handleNext={() => handlePageChange(page + 1)}
      />

      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          image={characterData.image}
          name={characterData.name}
          status={characterData.status}
          species={characterData.species}
          gender={characterData.gender}
          location={characterData.location.name}
          origin={characterData.origin.name}
        />
      )}
    </Wrapper>
  );
};
