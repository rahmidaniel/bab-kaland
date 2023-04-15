import Crossword, {ThemeProvider} from "@jaredreisinger/react-crossword";
import React from "react";

export const ValorantPuzzle = (prop: {onCorrect: ()=>void})=> {
    // .Don't get in my way! - Viper's Pit
    // Where is everyone hiding? - Neural Theft
    // He's surely been in London - Phoenix
    // She neatly fits in your ... - Sage
    // You should run! - Lockdown
    // Baguett consumer - Chamber
    // Useless but hot - Harbor
    // Coming back next patch - Bind
    // PENTAKILL!! - Ace
    // 2900, 1 tap - Vandal
    // Gateway to numbered rank ladder - Immortal
    // They have uniquely circled crosshairs - Shotguns
    // ... to another site - Rotate
    const data = {
            across: {
                3: {
                    clue: "Guns with circular crosshairs",
                    answer: "SHOTGUNS",
                    row: 2,
                    col: 6,
                },
                5: {
                    clue: "PENTAKILL!!",
                    answer: "ACE",
                    row: 5,
                    col: 4,
                },
                6: {
                    clue: "2900, 1 tap",
                    answer: "VANDAL",
                    row: 5,
                    col: 8,
                },
                8: {
                    clue: "He's surely been to London",
                    answer: "PHOENIX",
                    row: 7,
                    col: 1,
                },
                10: {
                    clue: "Baguett consumer",
                    answer: "CHAMBER",
                    row: 9,
                    col: 3,
                },
                11: {
                    clue: "Don't get in my way!",
                    answer: "VIPERSPIT",
                    row: 11,
                    col: 2,
                },
                12: {
                    clue: "Where is everyone hiding?",
                    answer: "NEURALTHEFT",
                    row: 13,
                    col: 2,
                },
            },
            down: {
                1: {
                    clue: "Coming back soon",
                    answer: "BIND",
                    row: 0,
                    col: 12,
                },
                2: {
                    clue: "___ to another site",
                    answer: "ROTATE",
                    row: 2,
                    col: 4,
                },
                3: {
                    clue: "Fits in your pocket",
                    answer: "SAGE",
                    row: 2,
                    col: 6,
                },
                4: {
                    clue: "Useless daddy",
                    answer: "HARBOR",
                    row: 4,
                    col: 9,
                },
                7: {
                    clue: "You should run!",
                    answer: "LOCKDOWN",
                    row: 5,
                    col: 13,
                },
                9: {
                    clue: "Gateway to numbered rank ladder",
                    answer: "IMMORTAL",
                    row: 7,
                    col: 6,
                },
            },
        };

    return(
        <div className="flex w-2/3 mx-auto pb-10">
            <ThemeProvider
                theme={{
                    columnBreakpoint: '0px',
                    gridBackground: 'rgba(255,255,255,0)',
                    cellBackground: '#FFFFFF',
                    cellBorder: '#000',
                    textColor: '#000',
                    numberColor: '#000',
                    focusBackground: '#115e59',
                    highlightBackground: 'rgba(55,205,190,0.42)',
                }}
            >
            <Crossword data={data} onCrosswordComplete={()=>prop.onCorrect()}/>
            </ThemeProvider>
        </div>
    );

}