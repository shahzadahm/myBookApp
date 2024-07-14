import React from 'react'
import Navbar from '../Navbar'
import Course from '../Course'
import Footer from '../Footer'
import list from "../../../public/card.json"

const Courses = () => {
  return (
    <div>
        <Navbar />
        <div className='min-h-screen'>
        <Course list={list}/>
        </div>
        <Footer />
    </div>
  )
}

export default Courses