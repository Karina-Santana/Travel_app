function renderLogin() {
  document.querySelector('#page').innerHTML = `
    <section class="log-in">
      <form onSubmit="login(event)">
        <h2 class="login-title">Login:</h2>
        <div class="email-password">
          <fieldset>
            <label class="email-label" for="">Email: </label>
            <input type="text" name="email">
          </fieldset>
          <fieldset>
            <label class="password-label" for="">Password: </label>
            <input type="password" name="password">
          </fieldset>
        </div>
        <button class="login-btn2" >Login</button>
      </form>
    </section>
  `
}

function login(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  fetch('/api/sessions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)

  })
    .then(res => res.json())
    .then(userName => state.loggedInUserName = userName)
    .then(() => {
      if (state.loggedInUserName == null) {
        renderLogin()
        document.querySelector('#error-message').innerHTML = `
        <section class='error' data-id=''>
          <p>Wrong password or Email.</p>
        </section>
        `
      } else {
        header()
        renderTripList()
        document.querySelector('#error-message').innerHTML = null
      }
    })
}

