import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";

const RandomChessGame = () => {
  const [game, setGame] = useState(new Chess());

  // Manejador para los movimientos del jugador
  const handleMove = (move) => {
    const result = game.move({
      from: move.from,
      to: move.to,
      promotion: "q", // Promocionar a reina por simplicidad
    });

    if (result === null) return false; // Movimiento ilegal

    setGame(new Chess(game.fen())); // Actualizar estado del juego

    // Esperar un poco antes de hacer el movimiento aleatorio
    setTimeout(makeRandomMove, 250);
    return true;
  };

  // Hacer un movimiento aleatorio para la computadora
  const makeRandomMove = () => {
    const possibleMoves = game.moves();

    // Terminar si no hay movimientos posibles
    if (possibleMoves.length === 0) return;

    const randomMove =
      possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
    game.move(randomMove);
    setGame(new Chess(game.fen())); // Actualizar estado del juego
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      style={{ backgroundColor: "#ead4b1" }}
    >
      <h1 className="text-3xl font-bold mb-6" style={{ color: "#503526" }}>
        Juega contra un oponente aleatorio
      </h1>
      <div className="flex justify-center">
        <Chessboard
          position={game.fen()}
          onPieceDrop={(from, to) => handleMove({ from, to })}
          boardWidth={400}
          boardOrientation="white"
        />
      </div>
      <p className="mt-6 text-lg" style={{ color: "#503526" }}>
        {/* {game.game_over() ? "¡Juego terminado!" : "Tu turno"} */}
      </p>
    </div>
  );
};

export default RandomChessGame;
