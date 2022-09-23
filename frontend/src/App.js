import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { Board } from './Board';
import { MinesweeperContext } from './MinesweeperContext';
import {boardSetup} from './boardSetup'
import { DifficultyButtons } from './DifficultyButtons';

function App() {

  const [currentBoard, setCurrentBoard] = useState([]);
  const [rows, setRows] = useState(10);
  const [cols, setCols] = useState(10);
  const [bombs, setBombs] = useState(10)
  const [lost, setLost] = useState(false)

  const gettersSetters = {currentBoard, setCurrentBoard, rows, setRows, cols, setCols}

  useEffect(()=>{
    const initialBoard = boardSetup(rows, cols, bombs);
    console.log('init:', initialBoard)
    setCurrentBoard(initialBoard);
  }, [rows])

  return (
    <MinesweeperContext.Provider value={gettersSetters}>

      <nav class="navbar navbar-light bg-primary text-center" style={{height: '7vh', margin: '7vh', textAlign: 'center'}}>
        <h1>Minesweeper</h1>
        <DifficultyButtons/>
        {/* <SearchBar />
        <AddMovieBar /> */}
      </nav>
      {lost ? <div>You Lost</div> : <Board /> }
       
    </MinesweeperContext.Provider>

  );
}

export default App;
