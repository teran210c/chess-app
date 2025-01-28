import { Chess } from "chess.js"
import { useState, useCallback, useEffect } from "react"
import { Chessboard } from "react-chessboard"

const ChessGame = () => {
  const [game, setGame] = useState(new Chess())
  const [status, setStatus] = useState("")

  const updateStatus = useCallback(() => {
    let newStatus = ""
    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        newStatus = `Checkmate! ${game.turn() === "w" ? "Black" : "White"} wins`
      } else if (game.isDraw()) {
        if (game.isStalemate()) {
          newStatus = "Game over: Draw by stalemate"
        } else if (game.isThreefoldRepetition()) {
          newStatus = "Game over: Draw by threefold repetition"
        } else if (game.isInsufficientMaterial()) {
          newStatus = "Game over: Draw by insufficient material"
        } else {
          newStatus = "Game over: Draw"
        }
      } else {
        newStatus = "Game over"
      }
    } else {
      newStatus = `${game.turn() === "w" ? "White" : "Black"} to move`
      if (game.isCheck()) {
        newStatus += " (in check)"
      }
    }
    setStatus(newStatus)
  }, [game])

  useEffect(() => {
    updateStatus()
  }, [game, updateStatus]) //This line was flagged as needing update, but the update provided did not offer a replacement.  Leaving as is for now.

  const handleMove = (move) => {
    const { sourceSquare, targetSquare } = move
    const result = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Promote to queen for simplicity
    })

    if (result === null) return false // Illegal move
    setGame(new Chess(game.fen())) // Update game state
    setTimeout(makeRandomMove, 250)
    return true
  }

  const makeRandomMove = () => {
    const possibleMoves = game.moves()
    if (game.isGameOver() || possibleMoves.length === 0) return
    const randomMove = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]
    game.move(randomMove)
    setGame(new Chess(game.fen()))
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Chess Game</h1>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Chessboard
          position={game.fen()}
          onPieceDrop={(sourceSquare, targetSquare) => handleMove({ sourceSquare, targetSquare })}
          boardWidth={400}
        />
      </div>
      <p className="mt-4 text-xl font-semibold text-gray-700">{status}</p>
      <button
        onClick={makeRandomMove}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        disabled={game.isGameOver()}
      >
        Make Random Move
      </button>
    </div>
  )
}

export default ChessGame