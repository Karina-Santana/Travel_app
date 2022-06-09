//creating state object with empty trips, itineraries and id
const state = {
  trips: [],
  itinerariesForTrip: [],
  tripId: null
}

//talking to API(db) to get trips data
fetch('/api/trips/:userId')
  .then(res => res.json())
  .then(trips => {
    state.trips = trips
    header()
  })
