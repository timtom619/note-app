import React from 'react'

const Course = ({ course }) => {
 
const courseNames = course.map(course => course.name)
const courseList = course.map((course) => {
  return course.parts
})
const [course1, course2] = courseNames
const [list1, list2] = courseList

const courseName1 = <h1 key={1}>{course1}</h1>
const courseName2 = <h1 key={2}>{course2}</h1>

const courseList1 = list1.map(course => <p key={course.id}>{course.name}</p>)
const courseList2 = list2.map(course => <p key={course.id}>{course.name}</p>)

const sumOfExercises = course.map((course) => {
  const exercises = course.parts.reduce((acc, curr) => {
    return acc + curr.exercises
  },0)
  return exercises
})
 
const [total1, total2] = sumOfExercises
  
  return (
    <div>
      {courseName1}
      {courseList1}
      <p>total of {total1} exercises</p>
      {courseName2}
      {courseList2}
      <p>total of {total2} exercises</p>
    </div>
  )
}

export default Course