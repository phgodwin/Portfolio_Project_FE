import axios from "axios";
import { useState } from "react";


// May need to lift the state later to enable set Access in an admin panel
function NewUser() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [access, setAccess] = useState("User");

    const handleSubmit = (event) => {
        event.preventDefault(); 

    axios.post("http://localhost:3031/users", {username, password, access})
    .then(response => {

        setUsername("");
        setPassword("");
        
    })
    .catch(error => console.log(error))
    
    }


    return (<div><h1>Register new user here!</h1>
        <form onSubmit={handleSubmit} >

{/* Need to input password criteria here! */}
            <label>Username:</label>
            <input id="setusername" value={username} type="text" onChange={e=>setUsername(e.target.value)}></input>
            <br />
            <label>Password:</label>
            <input id="setpassword" value={password} type="password" onChange={e=>setPassword(e.target.value)}></input>
            <p>password criteria here</p>
            <br />
            <button type="submit">Create Account</button>

        </form>
    </div>);
}

export default NewUser;