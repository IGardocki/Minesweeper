import React,{useContext} from "react";
import { MinesweeperContext } from "./MinesweeperContext";


export const DifficultyButtons = () => {

    const {setRows, setCols, setBombs} = useContext(MinesweeperContext);

    return(
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn btn-secondary" onClick={() => {
            setRows(3);
            setCols(3);
            setBombs(3);
        }}>Easy</button>
        <button type="button" class="btn btn-secondary">Medium</button>
        <button type="button" class="btn btn-secondary">Hard</button>
    </div>
    )
   
}

