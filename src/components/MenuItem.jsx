import React from 'react'

function MenuItem({item}) {
    console.log(item.image)
  return (
    <div className='menuItem'>
      <div style={{backgroundImage:`url(${item.image})`}}>
      </div>
      <h1>{item.name}</h1>
      <h6>{item.content}</h6>
      <p>{item.price} TL</p>
    </div>
  )
}

export default MenuItem
