import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'

export default function page() {
  return (
    <div className="bg-white">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  )
}
