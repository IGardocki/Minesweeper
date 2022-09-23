import React,{useContext} from "react";
import { MinesweeperContext } from "./MinesweeperContext";

export const boardSetup = (rows, cols, bombs) => {
    // const {rows, cols} = useContext(MinesweeperContext)

    const mainBoard = [];
    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push({
                val: 0,
                // display: 'none'
                clicked: false
            });
        }
        mainBoard.push(row)
    }

    console.log(mainBoard)
    // set bombs at 10 and randomly place them
    // let bombs = 10;
    while (bombs > 0) {
        let randomRow = Math.floor(Math.random() * rows);
        let randomCol = Math.floor(Math.random() * cols);

        if (mainBoard[randomRow][randomCol].val === 0) {
            mainBoard[randomRow][randomCol].val = 'B';
            bombs--;
        }
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            //passes over any Bs so we don't get NaN values
            if(mainBoard[i][j].val === 'B'){
                continue;
            }

            //checks row above
            if((i-1 >= 0) && (j-1 >= 0) && mainBoard[i-1][j-1].val === 'B') {
                mainBoard[i][j].val++;
            }
            if (i-1 >= 0 && mainBoard[i-1][j].val === "B") {
                mainBoard[i][j].val++;
            }
            if ((i-1 >= 0 && j+1 <= cols-1) && mainBoard[i-1][j+1].val=== "B") {
                mainBoard[i][j].val++;
            }

            //checks row it is on
            if((j-1 >= 0) && mainBoard[i][j-1].val === 'B') {
                mainBoard[i][j].val++;
            }
            if((j+1 <= cols-1) && mainBoard[i][j+1].val === 'B') {
                mainBoard[i][j].val++;
            }

            //checks row below
            if((i+1 <= rows-1) && (j-1 >= 0) && mainBoard[i+1][j-1].val === 'B') {
                mainBoard[i][j].val++;
            }
            if (i+1 <= rows-1 && mainBoard[i+1][j].val === "B") {
                mainBoard[i][j].val++;
            }
            if ((i+1 <= rows-1 && j+1 <= cols-1) && mainBoard[i+1][j+1].val=== "B") {
                mainBoard[i][j].val++;
            }
        }
    }
    console.log('mainbaord:', mainBoard)
    return mainBoard;
    // setCurrentBoard(mainBoard);
}