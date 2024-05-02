import arrow from "../../arrow.png"

function MyJourney() {
    return (

        <div>
            <div id="containerjourney" >
                <h1 style={{ fontSize: "35px", textAlign: "center" }}>Training &#128218;</h1>
                <p style={{ fontSize: "20px", textAlign: "center" }}>In November I began a 12 week intensive reskill in full stack development. With no prior experience I was able to build full stack applications by the end of the 12 weeks.</p>
                <ul style={{ fontSize: "20px" }}>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/AndykingSkywalker/ctrl_alt_elite">Front End Project</a> - Built a front end estate agents website in React</li>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/mikeatkoo01/Springpro2">Back End Project</a> - Take another groups project and build the corresponding back end in Spring Boot</li>
                    <li>Testing Project - Take another groups project and test the application in Selenium</li>
                </ul>
                <img src={arrow} height={100} style={{ rotate: "180deg", marginLeft: "90%" }} alt="arrow"></img>
            </div>

            <div id="containerjourney" style={{ marginRight: "0", marginLeft: "auto" }} >
                <h1 style={{ fontSize: "35px", textAlign: "center" }}>Incubation Lab &#129514;</h1>
                <p style={{ fontSize: "20px", textAlign: "center" }}>After the initial training period we entered an incubation lab, continuing with projects, attending workshops and building our stakeholder networks.</p>
                <ul style={{ fontSize: "20px" }}>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/phgodwin/IncubationFE">Legacy Cart Project</a> - Take a back end only application and convert to a modern full stack</li>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/lucy-yates/FrontEnd_ReactLegacy">Open Source Project</a> - Take another pairs project and add additional features</li>
                    <li><a target="_blank" rel="noreferrer" href="https://github.com/phgodwin/P3-MCP">CI/CD project</a> - Take another groups project and implement a CI/CD pipeline using Jenkins</li>
                </ul>
                <img src={arrow} height={100} style={{ rotate: "270deg" }} alt="arrow"></img>
            </div>

            <div id="containerjourney" >
                <h1 style={{ fontSize: "35px", textAlign: "center" }}>Future &#127891;</h1>
                <p style={{ fontSize: "20px", textAlign: "center" }}>After graduation on 10th May I'll be starting a role as a DevOps Support Engineer. I plan to continue my learning whilst I decide
                    in what area I want to focus. I still have a lot of work to do but I'm pleased with how far i've come!</p>
                <p style={{ fontSize: "35px", textAlign: "center" }}>...Watch this space!</p>
            </div>


        </div>
    );
}

export default MyJourney;