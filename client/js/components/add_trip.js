function renderAddTrip() {
  document.querySelector('#page').innerHTML = `
    <section class="create-trip">
      <form onSubmit="createTrip(event)">
        <h2>Add Trip:</h2>
        <fieldset>
          <label for="">Name: </label>
          <input type="text" name="name" >
        </fieldset>
        <fieldset>
          <label for="">Clue: </label>
          <input type="text" name="clue" >
        </fieldset>
        <fieldset>
          <label for="">Address: </label>
          <input type="text" name="address" >
        </fieldset>
        <button>Add Treasure</button>
      </form>
    </section>
  `
}
        // function to run when the form submits
        function createTreasure(event) {
          event.preventDefault()
          const form = event.target
  
          // whenever we want to get a form into an object, we use this line
          const data = Object.fromEntries(new FormData(form))
          fetch('/api/treasures', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(data)
  
          })
          .then(res => res.json())
          .then(treasure => {
            state.treasures.push(treasure)
            renderTreasureList() 
          })
        }
  