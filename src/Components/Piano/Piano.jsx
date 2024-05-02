import c1 from "../../../src/key01.mp3";
import key2 from "../../../src/mixkit-arcade-retro-game-over-213.wav"
import key3 from "../../../src/mixkit-cartoon-toy-whistle-616.wav"
import key4 from "../../../src/mixkit-fast-small-sweep-transition-166.wav"
import key5 from "../../../src/mixkit-retro-game-notification-212.wav"



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
            <button className="blackkey" onClick={() => playKey("key2")}></button>
            <audio id="key2" src={key2} />
            <button className="whitekey" onClick={() => playKey("key3")}>D</button>
            <audio id="key3" src={key3} />
            <button className="blackkey" onClick={() => playKey("key4")}></button>
            <audio id="key4" src={key4} />
            <button className="whitekey" onClick={() => playKey("key5")}>E</button>
            <audio id="key5" src={key5} />
            <button className="whitekey" onClick={() => playKey("c1")}>F</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("key2")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key3")}>G</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("key4")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key5")}>A</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("c1")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key2")}>B</button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key3")}>C</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("key4")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key5")}>D</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("c1")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key2")}>E</button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key3")}>F</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("key4")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key5")}>G</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("c1")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key2")}>A</button>
            <audio id="c1" src={c1} />
            <button className="blackkey" onClick={() => playKey("key3")}></button>
            <audio id="c1" src={c1} />
            <button className="whitekey" onClick={() => playKey("key4")}>B</button>
            <audio id="c1" src={c1} />
        </div>


    );
}

export default Piano;