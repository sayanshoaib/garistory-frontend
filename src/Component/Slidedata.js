import React from 'react'

function Slidedata(props) {
  return (
    <div className="cardz">
      <img className="product--image" src={props.url} alt="product image" />
      {/* <h2 className='n'>{props.name}</h2> */}
    </div>
  )
}

export default Slidedata