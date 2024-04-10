import axios from "axios";
import { useState } from "react";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [users, setUsers] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();

        axios.get("http://localhost:3031/users")
            .then((response) => {
                setUsers(response.data)
                let loggedIn = false; // Initialize a flag to track successful login

                for (const user of users) {
                    if (username.toLowerCase() === user.username.toLowerCase() && password === user.password) {
                        alert("Successful login");
                        loggedIn = true; // Set the flag to indicate successful login
                        setUsername("");
                        setPassword("");
                        break; // Exit the loop
                    }
                }

                if (!loggedIn) {
                    alert("Invalid username & password, please try again or register an account");
                }

            })

    }

    

return (<div><form onSubmit={handleSubmit}>
    <h3>Log In</h3>
    <label>Username:</label>
    <input id="username" type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
    <br />
    <label>Password:</label>
    <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
    <br />
    <button type="submit">Log In</button>

</form>
    <p>Don't already have an account? <a href="NewUser"> Sign up here! </a></p>
</div>
);
}

export default Login;