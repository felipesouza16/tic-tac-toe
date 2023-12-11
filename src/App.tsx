/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import "./App.css";
import { ButtonMoviment } from "./components/button-moviment";

type PropsOrderMoviment = {
  position: number;
  player: "playerX" | "playerO";
};

function App() {
  const [orderPlayers, setOrderPlayers] = useState<"playerX" | "playerO">(
    "playerX"
  );
  const [winner, setWinner] = useState("");
  const [orderMoviment, setOrderMoviment] = useState<PropsOrderMoviment[]>([]);
  const [ticTacToe, setTicTacToe] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [disabledButtons, setDisabledButtons] = useState(false);

  const widthClient = window.screen.width;

  useEffect(() => {
    const buttonX = document.getElementById("button-config-X");
    const buttonO = document.getElementById("button-config-O");
    if (orderPlayers === "playerX") {
      if (buttonX && buttonO) {
        buttonX.style.backgroundColor = "#fff";
        buttonX.style.color = "#000";
        buttonO.style.color = "#ffffffde";
        buttonO.style.backgroundColor = "#1a1a1a";
      }
    } else {
      if (buttonO && buttonX) {
        buttonO.style.backgroundColor = "#fff";
        buttonO.style.color = "#000";
        buttonX.style.color = "#ffffffde";
        buttonX.style.backgroundColor = "#1a1a1a";
      }
    }
  }, [orderPlayers]);

  useEffect(() => {
    winner.length > 0 && setDisabledButtons(true);
  }, [winner]);

  const calculateVictory = (ticTacToeState: string[]) => {
    const winMoviments = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winMoviments.length; i++) {
      const [a, b, c] = winMoviments[i];
      const buttonA = document.getElementById(`button-${a}`);
      const buttonB = document.getElementById(`button-${b}`);
      const buttonC = document.getElementById(`button-${c}`);

      if (
        ticTacToeState[a] === "X" &&
        ticTacToeState[b] === "X" &&
        ticTacToeState[c] === "X"
      ) {
        if (buttonA && buttonB && buttonC) {
          buttonA.style.backgroundColor = "#fff";
          buttonB.style.backgroundColor = "#fff";
          buttonC.style.backgroundColor = "#fff";
          buttonA.style.color = "#000";
          buttonB.style.color = "#000";
          buttonC.style.color = "#000";
        }
        setWinner("Player X");
        return;
      }
      if (
        ticTacToeState[a] === "O" &&
        ticTacToeState[b] === "O" &&
        ticTacToeState[c] === "O"
      ) {
        if (buttonA && buttonB && buttonC) {
          buttonA.style.backgroundColor = "#fff";
          buttonB.style.backgroundColor = "#fff";
          buttonC.style.backgroundColor = "#fff";
          buttonA.style.color = "#000";
          buttonB.style.color = "#000";
          buttonC.style.color = "#000";
        }
        setWinner("Player O");
        return;
      }
    }
  };

  const handleSetMoviment = (moviment: number) => {
    if (ticTacToe[moviment] === "") {
      if (orderPlayers === "playerX") {
        setTicTacToe((previous) => {
          calculateVictory({ ...previous, [moviment]: "X" });
          return { ...previous, [moviment]: "X" };
        });
        setOrderPlayers("playerO");
        setOrderMoviment((previous) => {
          return [...previous, { player: "playerX", position: moviment }];
        });
      } else {
        setTicTacToe((previous) => {
          calculateVictory({ ...previous, [moviment]: "O" });
          return { ...previous, [moviment]: "O" };
        });
        setOrderPlayers("playerX");
        setOrderMoviment((previous) => {
          return [...previous, { player: "playerO", position: moviment }];
        });
      }
    }
  };

  const handleSetInitalOrderPlayer = (player: "playerX" | "playerO") => {
    orderMoviment.length === 0 && setOrderPlayers(player);
  };

  return (
    <main>
      <section className="tic-tac-toe-container">
        <div className="container-config">
          <button
            type="button"
            className="button-restart"
            disabled={orderMoviment.length === 0}
            onClick={() => location.reload()}
          >
            Recomeçar
          </button>
          <h3>Player inicial: </h3>
          <div className="container-buttons">
            <button
              id="button-config-X"
              type="button"
              onClick={() => handleSetInitalOrderPlayer("playerX")}
            >
              X
            </button>
            <button
              id="button-config-O"
              type="button"
              onClick={() => handleSetInitalOrderPlayer("playerO")}
            >
              O
            </button>
          </div>
        </div>
        <div className="line-1">
          <ButtonMoviment
            numberMoviment={0}
            onClick={handleSetMoviment}
            orderMoviment={orderMoviment}
            disabledButtons={disabledButtons}
          />
          <div
            className="vertical-line"
            style={{ left: widthClient === 1920 ? "47.5%" : "46.5%" }}
          ></div>
          <ButtonMoviment
            numberMoviment={1}
            onClick={handleSetMoviment}
            orderMoviment={orderMoviment}
            disabledButtons={disabledButtons}
          />
          <div
            className="vertical-line"
            style={{ left: widthClient === 1920 ? "52.5%" : "53.5%" }}
          ></div>
          <ButtonMoviment
            numberMoviment={2}
            onClick={handleSetMoviment}
            orderMoviment={orderMoviment}
            disabledButtons={disabledButtons}
          />
        </div>
        <div className="horizontal-line"></div>
        <div className="line-2">
          <ButtonMoviment
            numberMoviment={3}
            onClick={handleSetMoviment}
            orderMoviment={orderMoviment}
            disabledButtons={disabledButtons}
          />
          <ButtonMoviment
            numberMoviment={4}
            onClick={handleSetMoviment}
            orderMoviment={orderMoviment}
            disabledButtons={disabledButtons}
          />
          <ButtonMoviment
            numberMoviment={5}
            onClick={handleSetMoviment}
            orderMoviment={orderMoviment}
            disabledButtons={disabledButtons}
          />
        </div>
        <div className="horizontal-line"></div>
        <div className="line-3">
          <ButtonMoviment
            numberMoviment={6}
            onClick={handleSetMoviment}
            orderMoviment={orderMoviment}
            disabledButtons={disabledButtons}
          />
          <ButtonMoviment
            numberMoviment={7}
            onClick={handleSetMoviment}
            disabledButtons={disabledButtons}
            orderMoviment={orderMoviment}
          />
          <ButtonMoviment
            numberMoviment={8}
            onClick={handleSetMoviment}
            orderMoviment={orderMoviment}
            disabledButtons={disabledButtons}
          />
        </div>
        {winner.length > 0 ? (
          <>
            <h1>Vencedor: {winner}</h1>
          </>
        ) : null}
      </section>
    </main>
  );
}

export default App;
