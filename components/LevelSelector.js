import React, { useState } from 'react';

const LevelSelector = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
    console.log(`Nivel ${level} seleccionado`);
  };

  const buttonStyle = (level) => ({
    width: '70px',
    height: '70px',
    borderRadius: '50%',
    border: '2px solid black',
    backgroundColor: selectedLevel === level ? '#C89B60' : '#E0C8A0',
    color: selectedLevel === level ? 'white' : 'black',
    fontSize: '24px',
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    margin: '10px',
    transition: 'background-color 0.3s, transform 0.3s',
    transform: selectedLevel === level ? 'scale(1.1)' : 'scale(1)',
  });

  const imageBoxStyle = (level) => ({
    width: '100px',
    height: '100px',
    backgroundColor: selectedLevel === level ? '#C89B60' : '#E0C8A0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '18px',
    fontWeight: 'bold',
    color: selectedLevel === level ? 'white' : '#333',
    borderRadius: '5px',
    transition: 'transform 0.3s',
    transform: selectedLevel === level ? 'scale(1.1)' : 'scale(1)',
  });

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px' }}>
        Welcome to the World Chess
      </h1>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Niveles</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        {[1, 2, 3, 4, 5, 6].map((level) => (
          <button
            key={level}
            style={buttonStyle(level)}
            onClick={() => handleLevelClick(level)}
          >
            {level}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;
