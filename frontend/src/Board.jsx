import React, {useState} from "react";

export const Board = () => {
    const [displaySetting, setDisplaySetting] = useState('none')
    
    // start board out as arr of 10 rows, each w/ ten cols, all with number 0
    const mainBoard = [];
    for (let i = 0; i < 10; i++) {
        let row = [];
        for (let j = 0; j < 10; j++) {
            row.push({
                val: 0,
                display: 'none'
            });
        }
        mainBoard.push(row)
    }

    console.log(mainBoard)
    // set bombs at 10 and randomly place them
    let bombs = 10;
    while (bombs > 0) {
        let randomRow = Math.floor(Math.random() * 10);
        let randomCol = Math.floor(Math.random() * 10);

        if (mainBoard[randomRow][randomCol].val === 0) {
            mainBoard[randomRow][randomCol].val = 'B';
            bombs--;
        }
    }

    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
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
            if ((i-1 >= 0 && j+1 <= 9) && mainBoard[i-1][j+1].val=== "B") {
                mainBoard[i][j].val++;
            }

            //checks row it is on
            if((j-1 >= 0) && mainBoard[i][j-1].val === 'B') {
                mainBoard[i][j].val++;
            }
            if((j+1 <= 9) && mainBoard[i][j+1].val === 'B') {
                mainBoard[i][j].val++;
            }

            //checks row below
            if((i+1 <= 9) && (j-1 >= 0) && mainBoard[i+1][j-1].val === 'B') {
                mainBoard[i][j].val++;
            }
            if (i+1 <= 9 && mainBoard[i+1][j] === "B") {
                mainBoard[i][j].val++;
            }
            if ((i+1 <= 9 && j+1 <= 9) && mainBoard[i+1][j+1].val=== "B") {
                mainBoard[i][j].val++;
            }
        }
    }
 
    return (

        <div class="container">
            {mainBoard.map(row => {
                return (
                    <div class="row bg-danger" style={{ height: '10vh', border: '1px solid black' }}>
                        {row.map(num => {
                            return (<div class="col-sm text-center" onClick={()=>setDisplaySetting('inline')} style={{ border: '1px solid black'}}>
                                {/* <h2 style={{display: displaySetting}}>{num}</h2> */}
                            </div>)
                        })}
                    </div>
                )
            })}

        </div>
    )
}