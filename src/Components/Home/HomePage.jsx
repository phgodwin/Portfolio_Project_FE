import Login from "../Login";
import emoji from 'react-easy-emoji'

function HomePage() {
    return (
        
        <main id="container" style={{width: "60%", margin: "auto", marginTop: "15%", paddingBlock: "50px"}}>
            <div>Hi I'm Paige,</div>
            <br/>
            <section id="animation">
                <div id="first" ><div>Full stack engineer in training! &#x1F4BB;</div></div>
                <div id="second"><div>Coffeeholic! 	&#x2615;</div></div>
                <div id="third"><div>Spotify's #1 fan! 	&#x1F3A7;</div></div>
            </section>
        </main>
        
    );
}

export default HomePage;