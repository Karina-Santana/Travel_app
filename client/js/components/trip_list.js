function renderTripList () {
  document.querySelector('#page').innerHTML = `
    <section class="trip-list">
    ${renderTrips()}
    </section>
  `
}

function renderTrips() {
    return state.trips.map(trip =>`
  <section class='trip' data-id='${trip.id}'>
    <header>
      <h2${trip.name}</h2>
      <span onClick="deleteTrip(event)">delete</span>
    </header>
    <p>${trip.start_date}</p>
    <p>${trip.end_date}</p>
  </section>
  `).join('')
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