const state = {
  trips: [],
  itinerariesForTrip: [],
  tripId: null
}

fetch('/api/trips')
  .then(res => res.json())
  .then(trips => {
    state.trips = trips
    header()

  })
