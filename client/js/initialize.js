const state = {
  trips: []
}

fetch('/api/trips')
  .then(res => res.json())
  .then(trips => {
    state.trips = trips
    header()
    renderTripList()
  })
