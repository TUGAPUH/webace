import { useState } from "react";
import toast from "react-hot-toast";

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(5)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    let solutionArr = [...solution.toLowerCase()];
    let formattedGuess = [...currentGuess.toLowerCase()].map((letter, ind) => {
      let color = "";
      let countOfCurrentLetter =
        (solution.match(new RegExp(`${letter}`, "g")) || []).length + 1;
      if (solutionArr.includes(letter)) {
        if (solutionArr[ind] === letter) {
          color = "green";
        } else if (countOfCurrentLetter >= 1) {
          color = "#cfcf2c";
        } else {
          color = "grey";
        }
      } else {
        color = "grey";
      }
      return { key: letter, color };
    });

    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess.toLowerCase() === solution.toLowerCase()) {
      setIsCorrect(true);
    }

    setGuesses((prevGuesses) => {
      let newGuesses = [...prevGuesses];
      newGuesses[turn] = formattedGuess;
      return newGuesses;
    });

    setHistory((prevHistory) => {
      return [...prevHistory, currentGuess];
    });

    setCurrentGuess("");

    setTurn((prevTurn) => {
      return prevTurn + 1;
    });
  };

  const handleKeyPressed = ({ key }) => {
    console.log(key);
    if (key === "Enter") {
      if (currentGuess.length !== 5) {
        /* console.log("Guess is must be equal 5 chars"); */
        return;
      }

      if (history.includes(currentGuess)) {
        /* console.log("This guess is alredy been declarated"); */
        return;
      }

      if (turn > 5) {
        /* console.log("You have no more turn"); */
        return;
      }

      const formattedGuess = formatGuess();
      addNewGuess(formattedGuess);
    }

    if (key === "Backspace") {
      setCurrentGuess((prev) => {
        return prev.slice(0, -1);
      });
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < 5) {
        setCurrentGuess((prev) => {
          return prev + key;
        });
      }
    }

    if (/^[А-Яа-я]$/.test(key)) {
      toast.error("Please on english only!", {
        id: "clipboard",
      });
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKeyPressed };
};

export default useWordle;
