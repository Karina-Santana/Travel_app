function header() {
    if (state.loggedInUserName) {
        document.querySelector('.header-nav').innerHTML = `
            <ul>
                <li onClick="renderTripList()">Show Trips</li>
                <li onClick="renderAddTrip()">Create Trip</li>
            </ul>
            <li class="logout-btn" onClick="logout(event)">Logout</li>
        `
    } else {
        document.querySelector('.header-nav').innerHTML = `
            <ul class="signup-login">
                <li class="signup-btn" onClick="renderSignUp()">Sign Up</li>
                <li class="login-btn" onClick="renderLogin()">Log in</li>
            </ul>
            <img src="https://media4.giphy.com/media/l0IyoqulCpw5YqTGE/giphy.gif?cid=ecf05e476v577d474f5t6jwg9b6ev3jwgvi1k4t8nc6gbsq0&rid=giphy.gif&ct=g" alt="">
        `
    }
}

function logout(event) {
    event.preventDefault()
    state.loggedInUserName = false
    header()
    return renderTripList()
}