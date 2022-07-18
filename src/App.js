import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const nameChanger = (event) => setNewName(event.target.value)

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {name: newName}
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={nameChanger} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(entry => 
          <li key={entry.name}>{entry.name}</li>)}
      </ul>
    </div>
  )
}

export default App