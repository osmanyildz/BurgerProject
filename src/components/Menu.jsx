import React from 'react'
import { Data } from '../helpers/Data'
import MenuItem from './MenuItem'
import '../styles/Menu.css'
function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Burgerlerimiz</h1>
      <div className='menuList'>
      {Data.map((menuItem, index)=>{
        return( <MenuItem key={index} item = {menuItem}/>)
      })}
      </div>
    </div>
  )
}

export default Menu
