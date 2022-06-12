function renderTripList(userId) {
  userId = state.loggedInUserName.userId
  renderTrips()
    .then((trips) => {
      if (state.loggedInUserName) {
        document.querySelector('#page').innerHTML = `
      <section class="trip-list">
        ${trips}
      </section>
    `
      } else {
        document.querySelector('#page').innerHTML = ''
      }
    })
}

function renderTrips() {
  return fetch(`api/trips/${state.userId}`)
    .then(res => res.json())
    .then(trips => {
      state.trips = trips
    })
    .then(() => {
      return state.trips.map(trip => `
    <section class='trip' style="background-image:url(${trip.image_url});" data-id='${trip.id}'>
      <header>
        <div class="trip-header">
          <h2 class="trip-name" onClick="renderItineraryList(${trip.id})">${trip.name}</h2>
          <p class="dates">${trip.start_date}  -  ${trip.end_date}</p>
        </div>
        <div class="edit-delete">
          <p class="edit-btn" onClick="renderEditTrip(${trip.id})">Edit</p>
          <p class="delete-btn" onClick="deleteTrip(event)">Delete</p>
        </div>
      </header>
    </section>
    `).join('')
    })
}

// function renderTrips() {
//   if (state.loggedInUserName) {
//     return state.trips.map(trip => `
//     <section class='trip' style="background-image:url(${trip.image_url});" data-id='${trip.id}'>
//       <header>
//         <h2 onClick="renderItineraryList(${trip.id})">${trip.name}</h2>
//         <p>${trip.start_date} - ${trip.end_date}</p>
//         <div class="edit-delete">
//           <p class="edit-btn" onClick="renderEditTrip()">Edit</p>
//           <p class="delete-btn" onClick="deleteTrip(event)">Delete</p>
//         </div>
//       </header>
//     </section>
//     `).join('')
//   } else {
//     return state.trips.map(trip => `
//     <section class='nothing' data-id='${trip.id}'></section>
//     `).join('')
//   }
// }


function renderEditTrip(tripId) {
  return state.trips.filter(trip => trip.id == tripId).map(trip => {
    document.querySelector('#page').innerHTML = `
    <section class='edit-trip' data-id='${tripId}'>
      <form onSubmit="editTrip(event, ${tripId})">
        <h2 class="edit-title">Edit Trip</h2>
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
    `}
  ).join('')
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
    .then(res => res.json())
    .then(editedTrip => {
      state.trips
        .forEach(trip => {
          if (trip.id == editedTrip.id) {
          }
        })
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
      renderTrips()
        .then((trips) => {
          document.querySelector('#page').innerHTML = `
        <section class="trip-list">${trips}
        </section>
        `
        })
    })
}
