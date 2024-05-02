import Piano from "../Piano/Piano";
import Playlist from "../Playlist";

function Experiments() {


    return (
        <div>

            <div id="containertwo" style={{ width: "50%", padding: "25px", margin: "auto", marginTop: "25px" }}>

                <Piano />
                <div>
                    <h1 style={{ fontSize: "35px", textAlign: "center" }}> Paige's Piano </h1>
                    <p style={{ fontSize: "20px", textAlign: "center" }}> As a music lover I knew I wanted to play around with sounds, after a bit of research I decided to build a small piano with each key built out of a button (with some heavy CSS!) and each linked to a different sound.</p>
                </div>

            </div>


            <div id="containertwo" style={{ width: "50%", padding: "25px", margin: "auto", marginTop: "25px" }}>

            <Playlist />
            
<div>
    <h1 style={{ fontSize: "35px", textAlign: "center" }}> Paige's Playlist </h1>
    <p style={{ fontSize: "20px", textAlign: "center" }}>  In keeping with the piano theme I wanted to make a little list of songs to learn that you can add, delete, and edit.</p>
</div>

</div>


        </div>
    );
}

export default Experiments;