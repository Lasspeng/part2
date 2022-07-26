import React from 'react'

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

export default Course