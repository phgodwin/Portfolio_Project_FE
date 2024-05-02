import selfie from "../../pride2022.jpg"
import arrow from "../../arrow.png"

function AboutPaige() {
    return (<div>
        <div style={{ width: "25%", margin: "auto", marginTop: "25px", paddingBlock: "25px" }} id="container">
            <img id="selfie" alt="Paige and her partner" src={selfie} width={200} height={300} style={{ borderRadius: "10px" }}></img>
            <img id="arrow" alt="Arrow pointing to paige" src={arrow} width={65} height={50} ></img>
            <p style={{ display: "inline", writingMode: "vertical-lr", marginLeft: "5px", marginRight: "10px" }}>This one is me!</p>
        </div>
        <div id="containertwo">
            <ul  style={{fontSize: "25px"}}>
                <li>8 years service within LBG</li>
                <li>Experience in servicing customers, managing colleagues and training new to role</li>
                <li>12 weeks full stack training with QA</li>
                <li>Experience with HTML, CSS, JavaScript, React, Java, Spring Boot, MySQL, Selenium, Jenkins and Docker</li>
                <li>Puzzle enthusiast</li>

            </ul>
            <br />
            <br />
            <div style={{ margin: "auto", width: "60%", textAlign: "center" }}>
                <p style={{ fontSize: "25px" }}>Please see below to download my full CV or pen portrait! </p>

                <a href="/PaigeGodwinCV.pdf" download="PaigeGodwinCV" target="_blank" rel="noreferrer" >
                    <button id="button">Download CV</button>
                </a>

                <a href="/PaigeGodwinPenPortrait.pptx" download="PaigeGodwinPenPortrait" target="_blank" rel="noreferrer">
                    <button id="button">Download Pen Portrait</button>
                </a>
            </div>
        </div>
    </div>
    );
}

export default AboutPaige;