const app = {
  init: function(formSelector) {
    this.max = 0
    document
      .querySelector(formSelector)
      .addEventListener('submit', ev => {
        ev.preventDefault()
        this.handleSubmit(ev)
      })
  },
  handleSubmit: function(ev) {
    const movieName = ev.target.flickName.value
    const flick = {
      id: ++this.max,
      name: movieName,
    }
    console.log(flick)
    ev.target.reset()
  },
}

app.init('#flickForm')
