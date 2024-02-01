import React from 'react'

const Board = ({name, imgSrc, score}) => {
    return (
        <div>
            <h4>{name}</h4>
            <img src={imgSrc} />
            <div>
                <h4>현재 점수</h4>
                <h4>{score}점</h4>
            </div>
        </div>
    )
}

export default Board
// const Board = () => {
//     const [userDice, setUserDice] = useState(1);
//     const [computerDice, setComputerDice] = useState(1);
//     const [userScore, setUserScore] = useState(0);
//     const [computerScore, setComputerScore] = useState(0);

//     const rollDice = () => {
//         const userRoll = parseInt(Math.random()*6)+1;
//         const computerRoll = parseInt(Math.random()*6)+1;

//         setUserDice(userRoll);
//         setComputerDice(computerRoll);
//         console.log(userRoll);

//         if(userRoll === computerRoll) {
//             alert("무승부!")
//         }else if(userRoll < computerRoll){
//             setUserScore(userScore+1);
//         }else{
//             setComputerScore(computerScore+1);
//         }
//     };

//     const ResetGame = () => {
//         setUserDice(1);
//         setComputerDice(1);
//         setUserScore(0);
//         setComputerScore(0);
//     }


//     return (
//         <div>
//             <h3>주사위 게임</h3>
//             <button onClick={rollDice}>던지기</button>
//             <button onClick={ResetGame}>RESET</button>
//             <div>
//                 <img src={`/img/dice${userDice}.png`} alt="userDice"/>
//             </div>
//             <div>
//                 <img src={`img/dice${computerDice}.png`} alt="computerDice"/>
//             </div>
            
//             <p>현재 점수는? {setUserScore}</p>
//             <p>현재 점수는? {setComputerScore}</p>

//         </div>
//     )

// }
