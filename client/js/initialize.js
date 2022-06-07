const state = { 
  trips: []
}

fetch('/api/treasures') 
  .then(res => res.json())
  .then(trips => {
    state.trips = trips 
    renderTripList() 
  })