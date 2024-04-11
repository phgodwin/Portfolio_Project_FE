import c1 from "../../../src/key01.mp3";

function Piano() {

    function playKey(id) {

        const key = document.getElementById(id);
        key.play();

    };


    return (

        // keys now playing sound - need to download/record all sounds to use for the remaining keys.
        <div className="piano">
            <button className="whitekey" onClick={() => playKey("c1")}>C</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("c1")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("d1")}>D</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("d#1")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("e1")}>E</button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("f1")}>F</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("f#1")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("g1")}>G</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("g#1")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("a1")}>A</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("a#1")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("b1")}>B</button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("c2")}>C</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("c#2")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("d2")}>D</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("d#2")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("e2")}>E</button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("f2")}>F</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("f#2")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("g2")}>G</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("g#2")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("a2")}>A</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("a#2")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("b2")}>B</button>
            <audio id="c1" src={c1} />
        </div>


    );
}

export default Piano;