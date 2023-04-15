import React, { useState } from 'react';

const solution = "Good job on solving all the puzzles!" +
    " I can't wait to celebrate your birthday!" +
    " Meet me at 17:30, the address is Budapest, Rakoczi ter 7, 1084." +
    " Dress code is casual, but refined." +
    " Lots of love, Babos";

function encrypt(message: string, shift: number) {
    const cipherText = [];

    for (let i = 0; i < message.length; i++) {
        let char = message[i];

        // Handle uppercase letters
        if (char.match(/[A-Z]/)) {
            let code = message.charCodeAt(i);
            code = ((code - 65 + shift) % 26) + 65;
            char = String.fromCharCode(code);
        }
        // Handle lowercase letters
        else if (char.match(/[a-z]/)) {
            let code = message.charCodeAt(i);
            code = ((code - 97 + shift) % 26) + 97;
            char = String.fromCharCode(code);
        }

        cipherText.push(char);
    }

    return cipherText.join("");
}

export const decrypt = (message: string, shift: number) => {
    // Decrypt by shifting in the opposite direction
    const shiftedShift = (26 - shift) % 26;
    return encrypt(message, shiftedShift);
};

export const CryptogramPuzzle = () =>{
    const [shift, setShift] = useState(0);
    const [firstPart, setFirstPart] = useState(true);

    const [inputValue, setInputValue] = useState("");
    const firstSolution = "caesar";

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        if (inputValue.toLowerCase().includes(firstSolution)) {
            setFirstPart(false);
        }
    }



    const initialShift = 17;
    const encryptedMessage = encrypt(solution, initialShift);

    return (
        <div className="flex flex-col w-5/6 mx-auto mb-28 shadow-2xl rounded-2xl">
            <div className="w-full mb-4 p-10">
                <p className="text-xl font-medium mb-2">Decrypt this message:</p>
                <p className="text-xl font-bold">{encryptedMessage}</p>
            </div>
            {firstPart ?
                <div className="mx-auto border-accent border-2 rounded-2xl p-8 mb-10">
                    <blockquote className="py-6 text-xl italic">
                        <p>I once ruled Rome with great success,</p>
                        <p>My power and might, none could contest.</p>
                        <p>But fate can be a fickle thing,</p>
                        <p>And in the end, it all came crashing.</p>
                        <br />
                        <p>My own flesh and blood, he sought my throne,</p>
                        <p>And with deceitful plans, he claimed it as his own.</p>
                        <p>Betrayed by my own son, I met my doom,</p>
                        <p>In death I rest, in my eternal tomb.</p>
                        <br />
                        <p>Who am I?</p>
                    </blockquote>
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" placeholder="Solution…"
                                   className="input input-bordered bg-base-300"
                                   onChange={(event)=>setInputValue(event.target.value)} />
                            <button className="btn btn-accent" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
                :
                <div className="mx-auto">
                    <div className="form-control w-min mx-auto p-10">
                        <input type="number" placeholder="Your birthday…"
                               className="input input-bordered bg-base-300"
                               onChange={(event)=>setShift(parseInt(event.target.value))} />
                    </div>
                    <div className="w-full mb-4 p-10">
                        <p className="text-xl font-medium mb-2">Output:</p>
                        <p className={`text-xl ${shift===initialShift ? "text-accent" : "text-error"} font-bold`}>{decrypt(encryptedMessage, shift)}</p>
                    </div>
                </div>
            }
        </div>
    );
}
