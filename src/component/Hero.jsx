import React from 'react'

const Hero = (props) => {
  return (
    <>
    <section className='decorated-bg '>

      <div className='container'>
        <h1 className='title'>{props.heading}</h1>
        <p>Home / {props.heading}</p>
      </div>
    </section>
   
    </>
  )
}

export default Hero
