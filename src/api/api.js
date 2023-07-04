import axios from "axios";

const apiURL = "https://rickandmortyapi.com/api/character";

export const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${apiURL}`);
    return response.data.results;
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
