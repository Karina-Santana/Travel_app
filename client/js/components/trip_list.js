function renderTripList() {
  document.querySelector('#page').innerHTML = `
    <section class="trip-list">
      ${renderTrips()}
    </section>
  `
}

//renderTripList make sure render all the trip list
//renderTrips pass all data from a trip
function renderTrips() {
  if (state.loggedInUserName) {
    return state.trips.map(trip => `
    <section class='trip' style="background-image:url(${trip.image_url});" data-id='${trip.id}'>
      <header>
        <h2 onClick="renderItineraryList(${trip.id})">${trip.name}</h2>
        <p>${trip.start_date} - ${trip.end_date}</p>
        <div class="edit-delete">
          <p class="edit-btn" onClick="renderEditTrip()">Edit</p>
          <p class="delete-btn" onClick="deleteTrip(event)">Delete</p>
        </div>
      </header>
    </section>
    `).join('')
  } else {
    return state.trips.map(trip => `
    <section class='nothing' data-id='${trip.id}'></section>
    `).join('')
  }
}


function renderEditTrip() {
  return state.trips.map(trip =>
    document.querySelector('#page').innerHTML = `
    <section class='edit-trip' data-id='${trip.id}'>
      <form onSubmit="editTrip(event)">
        <h2>Edit Trip</h2>
        <fieldset>
          <label for="">Name: </label>
          <input type="name" name="name" placeholder="${trip.name}">
        </fieldset>

        <fieldset>
          <label for="">Start date: </label>
          <input type="date" name="start_date" value="${trip.start_date}">
        </fieldset>

        <fieldset>
          <label for="">End Date: </label>
          <input type="date" name="end_date" value="${trip.end_date}">
        </fieldset>

        <fieldset>
          <label for="">Image URL: </label>
          <input type="text" name="image_url" placeholder="${trip.image_url}">
        </fieldset>
        <button>Edit Trip</button>
      </form>
    </section>
    `).join('')
}

function editTrip(event, tripId) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  fetch(`/api/trips/${tripId}`, {
    method: 'PUT',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })

  .then(() => {
   const editedTrip = state.trips.filter(t => t.id == tripId).slice(0)
    state.trips.push(editedTrip)
    console.log(editedTrip)
    renderTripList()  
  }) 
}

function deleteTrip(event) {
  const deleteBtn = event.target
  const tripDOM = deleteBtn.closest('.trip')
  const tripId = tripDOM.dataset.id
  fetch(`/api/trips/${tripId}`, {
    method: 'DELETE'
  })
    .then(() => {
      state.trips = state.trips.filter(t => t.id != tripId)
      renderTripList()
    })
}
