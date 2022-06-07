const state = { 
  trips: [], 
  itineraries: []
}

fetch('/api/trips')
  .then(res => res.json())
  .then(trips => {
    state.trips = trips
    header()
})

fetch('/api/itineraries') 
  .then(res => res.json())
  .then(itineraries => {
    state.itineraries = itineraries 
})
