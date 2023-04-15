import React, { useState } from 'react'
import {StardewPuzzle} from "./components/stardewPuzzle";
import {ValorantPuzzle} from "./components/valorantPuzzle";
import {CryptogramPuzzle} from "./components/cryptogramPuzzle";

function App() {
    const [puzzle, setPuzzle] = useState(0)
    
    const handleNext = () => {
        setPuzzle((prevState)=> prevState + 1);
    }
    
    const holder = [
        <ValorantPuzzle onCorrect={handleNext}/>,
        <StardewPuzzle onCorrect={handleNext}/>,
        <CryptogramPuzzle/>
    ];

    return (
        <div className="flex flex-col justify-center">
            <h1 className="rounded-2xl shadow-2xl border-2 border-accent text-8xl mb-16 mx-auto p-6">Birthday puzzle extravaganza</h1>
            <div className="">
               {holder[puzzle]}
            </div>
        </div>
      )
}

export default App
