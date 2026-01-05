// App.jsx
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductCard from './composite/ProductCard'
import UserCard from './compound/UserCard'

function App() {

   const users = [
    { name: "Steve", phone: "9876254676", city: "Los Angeles" },
    { name: "Dustin", phone: "6745990676", city: "California" },
    { name: "Mike", phone: "6464562680", city: "Dubai" }
  ];

  return (
    <div>
      <ProductCard />
      <p className='text-blue-400 text-3xl font-bold font-serif mt-5'>This is compound component</p>
      <UserCard>
        <UserCard.Header title="Here are the user details"/>
        <UserCard.List users={users}/>
        <UserCard.Info />
      </UserCard>
    </div>
  )
}

export default App