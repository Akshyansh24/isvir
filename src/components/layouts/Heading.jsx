import React from 'react'

function Heading({title, subtitle}) {
  return (
    <div className='section-Heading'>
        <span className='smallHeading'>{title}</span>
        <h2 className='bigHeading'>{subtitle}</h2>
    </div>
  )
}

export default Heading