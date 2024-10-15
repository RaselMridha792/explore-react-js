import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actors from './Actors'
import Singers from './Singers'

function App() {
  const actors = [
    'sakib', 'jasim', 'rubel', 'rajjak'
  ]

  const singers = [
    {name: 'arijit singh', age: 43},
    {name: 'neha kakkar', age: 23},
    {name: 'darshan raval', age: 33},
    {name: 'badshah', age: 39},
  ]
  return (
    <>
      <h1>vite + react</h1>
      {
        singers.map(singer =><Singers singer={singer}></Singers>)
      }
      <Person age="21" gender="male"></Person>
      <Person></Person>
      <Person></Person>
      <Actors></Actors>
      {/* access dynamicly values  */}
      {
        actors.map(actor =><Actors name={actor}></Actors>)
      }
      <Todo task="learn react" isComplete ={true}></Todo>
    </>
  )
}

function Person({age, gender}){
  console.log(age, gender);
  const a = 22;
  return (
    <>
      <h1>hello {a}</h1>
      <p>age: {age}</p>
      <p>gender: {gender}</p>
    </>
  )
}

export default App
