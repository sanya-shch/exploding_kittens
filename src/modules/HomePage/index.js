import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

import MainButton from "../../components/MainButton";
import MainInput from "../../components/MainInput";
import { db } from "../../firebase";
import { getUserId, getSixLetterCode } from "../../helpers";
import { expansions } from "../../constants/expansions";
import { ToastContext } from "../../components/Toast";

import "./style.scss";

const createGame = async ({
  uuid,
  gameId,
  setGameId,
  navigate,
  // setErrorMessage,
}) => {
  try {
    let codeArr = [];
    const codesDoc = await getDoc(
      doc(db, "game_room_codes_kitten", "code_array")
    );

    if (codesDoc.exists()) {
      codesDoc.data().codes.forEach((element) => {
        codeArr.push(element);
      });
      while (codeArr.indexOf(gameId) !== -1) {
        setGameId(getSixLetterCode());
      }
      codeArr.push(gameId);
      await updateDoc(doc(db, "game_room_codes_kitten/code_array"), {
        codes: codeArr,
      });
    } else {
      codeArr.push(gameId);
      await setDoc(doc(db, "game_room_codes_kitten/code_array"), {
        codes: codeArr,
      });
    }

    await setDoc(doc(db, `game_rooms_kitten/${gameId}`), {
      host_uid: uuid,
      card_deck: [],
      card_packs: [expansions.ExplodingKittensOriginal],
      out_card_deck: [],
      expansions: [],
      // player_data_arr: [{ username: '', uid: uuid, points: 0 }],
      player_data_arr: [],
      player_cards: {},
      banned_player_uid: [],
      midgame_player_uid: [],
      game_room_closed: false,
      ongoing_game: false,
      icon_pack: "",
      current_player_uid: uuid,
      players_list: [],

      game_moves: [],
      attack_count: 0,
      is_impending_imploding_kitten: false,
    });

    navigate(`/game/${gameId}`);
  } catch (e) {
    console.error("Error adding document: ", e);
    // setErrorMessage("please try again later");
  }
};

const HomePage = ({ gameId, setGameId }) => {
  const { setToast } = useContext(ToastContext);

  const [code, setCode] = useState("");

  const navigate = useNavigate();
  const uuid = getUserId();

  useEffect(() => {
    setGameId(getSixLetterCode());
  }, [setGameId]);

  const handleClickNewGame = () => {
    createGame({
      uuid,
      gameId,
      setGameId,
      navigate,
    });
  };
  const handleClickJoinToGame = async () => {
    if (code !== "") {
      const codesDoc = await getDoc(
        doc(db, "game_room_codes_kitten", "code_array")
      );

      if (codesDoc.data().codes.indexOf(code) !== -1) {
        navigate(`/game/${code}`);
      } else {
        setToast({
          type: "danger",
          text: "Please enter a valid code",
        });
      }
    } else {
      setToast({
        type: "danger",
        text: "Please enter a code",
      });
    }
  };
  const handleChange = (value) => {
    setCode(value.toUpperCase());
  };

  return (
    <div className="home_page">
      <div className="first_screen">
        <h1>
          <span>EXPLODING</span> KITTENS
        </h1>
        <div className="input_block">
          <MainButton text="New Game" onClick={handleClickNewGame} />
          <MainInput
            label="Enter Game Code"
            btnText="Join"
            maxLength={6}
            value={code}
            onChange={handleChange}
            onClick={handleClickJoinToGame}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
