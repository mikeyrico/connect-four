import React from 'react'

const Header = ({handleTurn}) => {
  let header = [];
  for (var i = 0; i < 7; i++) {
    header.push(
      <span
        className='header'
        key={i}
        data-col={i}
        onClick={(e) => handleTurn(e.target.getAttribute('data-col'))} >
      </span>)
  }
  return (
    <div>
      {header}
    </div>
  )
}

export default Header
