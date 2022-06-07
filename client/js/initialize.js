const state = { 
  trips: []
}

<<<<<<< HEAD
fetch('/api/treasures') 
=======
fetch('api/trips') 
>>>>>>> 541e56637eabbbaccd7d218d11f0df28463ba66a
  .then(res => res.json())
  .then(trips => {
    state.trips = trips 
    renderTripList() 
<<<<<<< HEAD
  })
=======
})
>>>>>>> 541e56637eabbbaccd7d218d11f0df28463ba66a
