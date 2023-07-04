import axios from "axios";

const apiURL = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async (page) => {
  try {
    const response = await axios.get(`${apiURL}/?page=${page}`);
    return {
      characters: response.data.results, //characters
      totalPages: response.data.info.pages //pagination
    };
  } catch (err) {
    console.error("Error retrieving charachters:", err);
    throw err;
  }
};

export const getOneCharacter = async (id) => {
  try {
    const response = await axios.get(`${apiURL}/${id}`);
    return response.data;
  } catch (err) {
    console.error(`Error retrieving character with ID ${id}:`, err);
    throw err;
  }
};
