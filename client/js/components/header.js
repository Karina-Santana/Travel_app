function header() {
    if (state.loggedInUserName) {
        document.querySelector('.header-nav').innerHTML = `
            <ul class="show-create-logout">
                <li class="show-list" onClick="renderTripList(${state.loggedInUserName.userId})">Show Trips</li>
                <li class="create-trip" onClick="renderAddTrip()">Create Trip</li>
                <li class="logout-btn" onClick="logout(event)">Logout</li>
            </ul>
        `
    } else {
        document.querySelector('.header-nav').innerHTML = `
            <ul class="signup-login">
                <li type="button" class="signup-btn" onClick="renderSignUp()">Sign up</li>
                <li class="login-btn" onClick="renderLogin()">Log in</li>
            </ul>
            <h2 class="call-to-action1">It's time to travel!</h2> 
            <h3 class="call-to-action2">Sign up, organize all the travel information you need and explore the world!</h3>
            <img class="home-gif" src="https://media4.giphy.com/media/l0IyoqulCpw5YqTGE/giphy.gif?cid=ecf05e476v577d474f5t6jwg9b6ev3jwgvi1k4t8nc6gbsq0&rid=giphy.gif&ct=g" alt="">
        `
    }
}

function logout(event) {
    event.preventDefault()
    state.loggedInUserName = false
    header()
    return renderTripList()
}