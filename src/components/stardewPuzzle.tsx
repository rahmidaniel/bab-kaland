import React, {useState} from "react";

export const StardewPuzzle = (prop: {onCorrect: ()=>void}) => {

    const [inputValue, setInputValue] = useState("");

    const solution = "skeleton";

    function handleSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        if (inputValue.toLowerCase() === solution) {
            prop.onCorrect();
        }
    }

    return (
        <div className="flex w-5/6 mx-auto mb-28 shadow-2xl rounded-2xl">
            <div className="w-1/3 p-12">
                <h1 className="text-4xl">Stardew Valley Puzzle</h1>
                <p className="text-2xl">Solve the haiku to continue.</p>
                <blockquote className="py-6 text-3xl italic">
                    <p>黄金の空の下、</p>
                    <p>野原に人影が立ち、</p>
                    <p>黙って骨を見守る</p>
                    <p className="text-lg font-extralight">Kanji version</p>
                </blockquote>
                <blockquote className="pb-6 text-3xl italic">
                    <p>きんいろのそら</p>
                    <p>のしたで、にんけいがたち、</p>
                    <p>だまってほねをみまもる。</p>
                    <p className="text-lg font-extralight">Hiragana version</p>
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
            <div className="w-2/3 border-4 rounded border-accent">
                <TransformWrapper
                    initialScale={4}
                    initialPositionX={-1300}
                    initialPositionY={-1500}
                    wheel={{disabled: true}}
                >
                    <TransformComponent>
                        <img className="farmImage" src="03-03-17.png" alt="Farm" />
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
);
};

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
