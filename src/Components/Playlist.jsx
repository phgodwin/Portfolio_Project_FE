import axios from "axios";
import { useEffect, useState } from "react";

function Playlist() {

    const [songName, setSongName] = useState("");
    const [songs, setSongs] = useState([]);


    const handleSubmit = event => {
        event.preventDefault();

        axios.post("http://localhost:3030/songs", { songName })
            .then((response) => {
                console.log(response);
                setSongName("");
                getSongs();
            })
            .catch((err) => console.error(err));

    }

    function getSongs() {
        axios
            .get("http://localhost:3030/songs")
            .then((response) => {
                setSongs(response.data)
            })
            .catch(error => console.error(error))
    }
    useEffect(getSongs, [])

    function removeSong(id) {
        axios.delete("http://localhost:3030/songs/" + id)
            .then(() => {
                getSongs();
            })
            .catch((err) => console.error(err));
    }



    return (


        <div >
            <div >
                <form onSubmit={handleSubmit} style={{ alignContent: "center", margin: "auto" }}>
                    <label style={{ fontSize: "25px" }}>Song:</label>
                    <input style={{ height: "25px" }} type="text" value={songName} onChange={(e) => setSongName(e.target.value)}></input>
                    <button type="submit" id="submitbutton" style={{ height: "25px" }} >Add Song</button>
                </form>
            </div>

            <div id="notepad" style={{ width: "100%", height: "1000px" }}>
                <br />
                <br></br>
                <ul style={{ fontSize: "15px", marginLeft: "125px", marginTop: "70px" }}>
                    {songs.map((song) => <li style={{ paddingBlock: "12px" }}>{song.songName}
                        <button id="delete" onClick={() => removeSong(song.id)}>X</button>
                        <button id="edit" >Edit</button></li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Playlist;