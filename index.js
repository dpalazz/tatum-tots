const app = {
  init: function(formSelector) {
    document
      .querySelector(formSelector)
      .addEventListener('submit', this.handleSubmit)
  },
  handleSubmit: function(ev){
    ev.preventDefault()
    const movieName = ev.target.flickName.value    
  },
}

app.init('#flickForm')
