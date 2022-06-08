function renderItineraryList(tripId) {
  state.tripId = tripId
  //getting the itineraries and putting them on the page:
  renderItinerary()
    .then((itineraries) => {
      document.querySelector('#page').innerHTML = `
        <section class="itinerary-list">
          <li onClick="renderAddItinerary()">Add itinerary</li>
          <section class="itineraries">
            ${itineraries}
          </section>
        </section>
      `
    })

}


function renderItinerary() {
  //getting the itinerary data for that trip
  return fetch(`/api/itineraries/${state.tripId}`)
    .then(res => res.json())
    .then(itineraries => {
      state.itinerariesForTrip = itineraries
    })
    .then(() => {
      return state.itinerariesForTrip.map(itinerary => `
      <section class='itinerary' data-id='${itinerary.id}'>
        <header>
          <h2>${itinerary.start_location}</h2>
        </header>
        <span>${itinerary.start_date}</span>
        <span>${itinerary.end_date}</span>
        <span>${itinerary.start_time}</span>
        <span>${itinerary.end_date}</span>
        <p>${itinerary.end_location}</p>
        <article>
          <p>${itinerary.activities}</p>
          <p>${itinerary.notes}</p>
          <p>${itinerary.checklist}</p>
        </article>
      </section>
    `).join('')
    })
}




// function renderItinerary() {
//   const sydneyTemp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=sydney&APPID=4653bc52bc6436e900c63bb2ac644f67&units=metric`)

//   return state.itineraries.map(itinerary => `
//     <section class='itinerary' data-id='${itinerary.id}'>
//       <header>
//         <h2>${itinerary.start_location}</h2>
//       </header>
//       <p>${itinerary.start_date}</p>
//       <p>${itinerary.end_date}</p>
//       <p>${itinerary.start_time}</p>
//       <p>${itinerary.end_date}</p>
//       <p>${itinerary.end_location}</p>
//       <article>
//         <p>${itinerary.activities}</p>
//         <p>${itinerary.notes}</p>
//         <p>${itinerary.checklist}</p>
//       </article>
//     </section>
//   `).join('')
// }



// const main = document.querySelector('#page')
// const locationName = document.querySelector(itinerary.end_location).textContent
// const startDate = document.querySelector(itinerary.start_date).textContent
// const endDate = document.querySelector(itinerary.end_date).textContent

// function weatherForecast(locationName) {
//   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${locationName}&APPID=4653bc52bc6436e900c63bb2ac644f67&units=metric`)
//     .then(response => response.json())
//     .then(response => {
//       const weather = response
//       console.log(locationName)
//       console.log(weather.name)
//       // const heading = document.createElement('h2')
//       // heading.textContent = `${locationName} Forecast from ${startDate} to ${endDate}:`

//       // const weatherInfo = document.createElement('p')
//       // weatherInfo.textContent = `The temperature will vary from ${weather.daily.temp.min} to ${weather.daily.temp.max}`
//       // main.appendChild(weatherInfo)
//     })
// }