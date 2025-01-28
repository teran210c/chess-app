"use client"

import React, { useState, useCallback, useEffect } from "react"
import { Chess } from "chess.js"
import { Chessboard } from "react-chessboard"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
const ChessGame = () => {
  const [game, setGame] = useState(new Chess())
  const [status, setStatus] = useState("")
  const [selectedLevel, setSelectedLevel] = useState(1)
  const [unlockedLevels, setUnlockedLevels] = useState([1])
  const [showWinDialog, setShowWinDialog] = useState(false)

  const levelPositions = {
    1: "7k/8/8/8/8/8/8/R6K w - - 0 1",
    2: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1",
    3: "r1bqk2r/ppp2ppp/2n2n2/1B1pp3/1b2P3/2NP1N2/PPP2PPP/R1BQK2R w KQkq - 0 1",
    4: "r3k2r/pppq1ppp/2npbn2/1B2p3/1b2P3/2NPP3/PPPN1PPP/R1BQ1RK1 w kq - 0 1",
    5: "r1bqk2r/pp2bppp/2n1pn2/2pp4/3P1B2/2N1PN2/PPP1BPPP/R2QK2R w KQkq - 0 1",
  }

  const updateStatus = useCallback(() => {
    let newStatus = ""
    if (game.isGameOver()) {
      if (game.isCheckmate()) {
        if (game.turn() === "b") {
          // White wins
          newStatus = "Checkmate! You win!"
          setShowWinDialog(true)
        } else {
          newStatus = "Checkmate! Black wins"
        }
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
  }, [updateStatus]) // Removed unnecessary dependency: game

  const makeRandomMove = useCallback(() => {
    const possibleMoves = game.moves()
    if (game.isGameOver() || possibleMoves.length === 0) return
    const randomIndex = Math.floor(Math.random() * possibleMoves.length)
    const randomMove = possibleMoves[randomIndex]
    game.move(randomMove)
    setGame(new Chess(game.fen()))
  }, [game])

  const handleMove = (move) => {
    const { sourceSquare, targetSquare } = move
    const result = game.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // Promote to queen for simplicity
    })

    if (result === null) return false // Illegal move
    setGame(new Chess(game.fen())) // Update game state

    // Make a random move for the computer after a short delay
    setTimeout(makeRandomMove, 250)

    return true
  }

  const handleLevelClick = (level) => {
    if (unlockedLevels.includes(level)) {
      setSelectedLevel(level)
      console.log(`Nivel ${level} seleccionado`)
      setGame(new Chess(levelPositions[level]))
    } else {
      console.log(`Nivel ${level} bloqueado`)
    }
  }

  const handleWinDialogClose = () => {
    setShowWinDialog(false)
    const nextLevel = Math.min(selectedLevel + 1, 5)
    setUnlockedLevels((prev) => [...new Set([...prev, nextLevel])])
    setSelectedLevel(nextLevel)
    setGame(new Chess(levelPositions[nextLevel]))
  }

  const buttonStyle = (level) => {
    const isUnlocked = unlockedLevels.includes(level)
    const isSelected = selectedLevel === level

    return `
      w-16 h-16 rounded-full border-2 border-gray-300 
      flex items-center justify-center text-xl font-bold 
      transition-all duration-300 ease-in-out
      ${isUnlocked
        ? `${isSelected
          ? "bg-yellow-500 text-white transform scale-110"
          : "bg-yellow-200 text-yellow-800 hover:bg-yellow-300"
        }`
        : "bg-gray-300 text-gray-500 cursor-not-allowed"
      }
    `
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to the World Chess</h1>

      <div className="mb-8">
        <h2 className="text-2xl mb-4">Niveles</h2>
        <div className="flex justify-center space-x-4">
          {[1, 2, 3, 4, 5].map((level) => (
            <button
              key={level}
              className={buttonStyle(level)}
              onClick={() => handleLevelClick(level)}
              disabled={!unlockedLevels.includes(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-lg">
        <Chessboard
          position={game.fen()}
          onPieceDrop={(sourceSquare, targetSquare) => handleMove({ sourceSquare, targetSquare })}
          boardWidth={400}
          boardOrientation="white"
        />
      </div>
      <Transition appear show={showWinDialog} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setShowWinDialog(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-md bg-white rounded-lg p-6 shadow-xl">
              <Dialog.Title className="text-lg font-bold">¡Felicidades!</Dialog.Title>
              <Dialog.Description className="mt-2 text-gray-600">
                Has superado este nivel.
              </Dialog.Description>

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => {
                    setShowWinDialog(false);
                    const nextLevel = Math.min(selectedLevel + 1, 5); // Asegura que no pase del nivel 5
                    setUnlockedLevels((prev) => [...new Set([...prev, nextLevel])]); // Desbloquea el siguiente nivel
                    setSelectedLevel(nextLevel); // Actualiza el nivel seleccionado
                    setGame(new Chess(levelPositions[nextLevel])); // Carga la nueva posición
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Seguir
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}

export default ChessGame

