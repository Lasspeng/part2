import React from 'react'

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  const total1 = courses[0].parts.reduce((sum, currentValue) => sum += currentValue.exercises, 0)
  const total2 = courses[1].parts.reduce((sum, currentValue) => sum += currentValue.exercises, 0)

  return (
    <>
      <h1>{courses[0].name}</h1>
      <Course courses={courses[0]} />
      <Sum total={total1} />

      <h1>{courses[1].name}</h1>
      <Course courses={courses[1]}/>
      <Sum total={total2}/>
    </>
  )
}

const Course = ({courses}) => {
  return (
    <>
      <ul>
        {courses.parts.map(part =>
          <li key={part.id}>
            {part.name}: {part.exercises}
          </li>
        )}
      </ul>
    </>
  )
}

const Sum = ({total}) => {
  return (
    <>
      <p><b>Total of {total} exercises</b></p>
    </>
  )
}

export default App