

function Login() {






    return (<div><form>
        <h3>Log In</h3>
        <label>Username:</label>
        <input id="username" type="text"></input>
        <br />
        <label>Password:</label>
        <input id="password" type="password"></input>
        <br />
        <button type="submit">Log In</button>

    </form>
    <p>Don't already have an account? <a href="NewUser"> Sign up here! </a></p>
    </div>
    );
}

export default Login;