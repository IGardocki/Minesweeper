import React, {useState, useContext} from "react";
import { MinesweeperContext } from "./MinesweeperContext";

export const Board = () => {
    const {currentBoard, setCurrentBoard, setLost} = useContext(MinesweeperContext)
   
    const tempCopy = currentBoard.slice();

    return (

        <div class="container">
            {tempCopy.map(row => {
                return (
                    <div class="row bg-danger" style={{ height: '7vh', width:'50vw', border: '1px solid black' }}>
                        {row.map(num => {
                            return (<div class="col-sm text-center" onClick={()=>{
                                num.clicked = true;
                                if (num.val === 'B'){
                                    alert('You Lose!');
                                    setLost(true);
                            
                                }
                                setCurrentBoard(tempCopy)
                            }} 
                            style={{ border: '1px solid black'}}>
                                {num.clicked ?  <h2>{num.val}</h2> : <h2></h2>}
                            </div>)
                        })}
                    </div>
                )
            })}

        </div>
        
    )
}