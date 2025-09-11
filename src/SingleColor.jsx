import React from 'react'

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color
  return (
    <article className="color" style={{ background: `#${hex}` }}>
      {weight}%<p>{`#${hex}`}</p>
    </article>
  )
}

export default SingleColor
