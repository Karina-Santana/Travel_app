function renderAddItinerary() {
  document.querySelector('#page').innerHTML = `
  <form onSubmit="createItinerary(event)">
      <h2 class="add-itinerary-title">Add Itinerary to your Trip:</h2>
      <fieldset>
        <label for="">Start City: </label>
        <input type="name" name="start_location">
      </fieldset>

      <fieldset>
        <label for="">Ending City: </label>
        <input type="text" name="end_location">
      </fieldset>

      <fieldset>
        <label for="">Start Date: </label>
        <input type="date" name="start_date">
      </fieldset>

      <fieldset>
        <label for="">Ending Date: </label>
        <input type="date" name="end_date">
      </fieldset>

      <fieldset>
        <label for="">Start Time: </label>
        <input type="time" name="start_time">
      </fieldset>

      <fieldset>
        <label for="">End Time </label>
        <input type="time" name="end_time">
      </fieldset>

      <fieldset>
        <label for="">Activities: </label>
        <input type="text" name="activities" placeholder="Write here places to visit, activities and more">
      </fieldset>

      <fieldset>
        <label for="">Notes: </label>
        <input type="text" name="notes" placeholder="Write or paste anything here">
      </fieldset>

      <fieldset>
        <label for="">Checklist: </label>
        <input type="text" name="checklist" placeholder="Write here what you can not forget">
      </fieldset>

      <input type="hidden" name="trip_id" value="1">

      <button>Add Itinerary</button>
    </form>
  </section>
  `
}

function createItinerary(event) {
  event.preventDefault()
  const form = event.target
  const data = Object.fromEntries(new FormData(form))
  fetch(`/api/itineraries/${state.tripId}`, {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(res => res.json())
    .then(itinerary => {
      state.itinerariesForTrip.push(itinerary)
      renderItineraryList(state.tripId)
    })
}