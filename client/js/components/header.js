function header() {
    if (state.loggedInUserName) {
        document.querySelector('.header-nav').innerHTML = `
            <ul>
                <li onClick="renderTripList()">Show Trips</li>
                <li onClick="renderAddTrip()">Create Trip</li>
            </ul>
            <form action="/sessions" method="POST">
                <button class="logout-btn">Logout</button>
                <input type="hidden" name="_method" value="delete">
            </form>
        `
    } else {
        document.querySelector('.header-nav').innerHTML = `
            <ul>
                <li onClick="renderSignUp()">Sign Up</li>
                <li onClick="renderLogin()">Log in</li>
            </ul>
        `
    }
}

