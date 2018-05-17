// Global Variables
const form = document.querySelector('form')
const arrayOfMovies = []

// Functions
const renderList = () => {
  const list = document.createElement('ul')
  const item = document.createElement('li')
  const btn = document.createElement('button')
  item.textContent = form.title.value
  btn.textContent = 'DELETE'
  btn.setAttribute('class', 'delete')
  arrayOfMovies.push(form.title.value)
  const container = document.querySelector('.container')
  container.appendChild(item)
  container.appendChild(btn)

  // Add event listener
  btn.addEventListener('click', deleteMovie)
}

const deleteMovie = (ev) => {
  const listItemToBeRemoved = ev.target.previousElementSibling
  listItemToBeRemoved.remove()
  ev.target.remove()
}

form.title.focus()

// Event Handlers
const handleSubmit = (event) => {
  event.preventDefault()
  const list = renderList()

  // Reset the form
  form.reset()
  form.title.focus()
}

// Event Listeners
form.addEventListener('submit', handleSubmit)
