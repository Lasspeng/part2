import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: ''
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const nameChanger = (event) => setNewName(event.target.value)
  const numberChanger = (event) => setNewNumber(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }
    const result = persons.filter(person => person.name === nameObject.name)
    if (result.length === 0) {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    } else {
      alert(`${nameObject.name} is already added to phonebook`)
      setNewName('')
      setNewNumber('')
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={nameChanger} />
        </div>
        <div>
          number: <input value={newNumber} onChange={numberChanger} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(entry => 
          <li key={entry.name}>{entry.name} {entry.number}</li>)}
      </ul>
    </div>
  )
}

export default App