const Header = ({ course }) => <h1>{course}</h1>

const Total = ({ parts }) => {
  const totalAmount = parts.reduce((sum,part)=>{
    return sum+part.exercises},0)
  console.log(totalAmount)
  return(
    <h3>total amount of {totalAmount} exercises</h3>
  )
}




const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {parts.map((part)=>{
      return <Part key={part.id} part={part}/>
    })}
       
  </>
const Course = ({course}) => {
  return(
    <div>
    <Header course = {course.name}/>
    <Content parts = {course.parts}/>
    <Total parts = {course.parts}/>
    </div>
  )
}

const AllCourses = ({courses}) => {
  return (
    <>
      {courses.map((course)=><Course key = {course.id} course = {course}/>)}
    </>
  )
}

export default AllCourses