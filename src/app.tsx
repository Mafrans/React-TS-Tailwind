import React from 'react'
import ReactDOM from 'react-dom'
import './global.css'

const HelloWorld = () => {
  return (
    <>
      <h1 className='text-2xl'>Hello World!</h1>
      <p>Det funkar 100%!</p>
    </>
  )
}

ReactDOM.render(<HelloWorld />, document.querySelector('*[data-reactroot]'))
