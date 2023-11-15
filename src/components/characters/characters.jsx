import React, { useContext, useState } from "react";
import Header from "../header/header";
import { Usercontext } from "../../App";
import "./characters.scss";
import Playbutton from "../Playbutton/playbutton";
import { Box } from "@mui/material";

function Charcters() {
  const movies = useContext(Usercontext);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (character) => {
    setSelectedCharacter(character);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCharacter(null);
    setIsModalOpen(false);
  };

  return (
    <Box className="total1">
      <Header />
      <Box className="total1__characters">
        {movies.map((character) => (
          <Box
            key={character.id}
            className="total1__characters__single"
            onClick={() => openModal(character)}
          >
            <img
              src={character.character}
              className="total1__characters__single__img"
              alt={`Character ${character.title}`}
            />
          </Box>
        ))}
      </Box>

      {isModalOpen && selectedCharacter && (
        <Box className="total1__modal">
          <Box className="total1__modal__content">
            <span
              className="total1__modal__content__close"
              onClick={closeModal}
            >
              &times;
            </span>
            <img
              src={selectedCharacter.poster}
              alt={`Character ${selectedCharacter.title}`}
              className="total1__modal__content__img2"
            />
            <Playbutton />
            <h2 className="total1__modal__content__title">
              {" "}
              {selectedCharacter.title}
            </h2>
            <p className="total1__modal__content__description1">
              {selectedCharacter.description}
            </p>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Charcters;
