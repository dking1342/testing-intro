import React from 'react'
import { Sidebar } from '../types/sidebar'

const SideBar = ({ items }: Sidebar) => {
  return (
    <aside>
      <h2>Sidebar</h2>
      <div>
        {
          items.map(item => 
            <a key={item.name} href={item.href} role="navigation">{ item.name }</a>  
          )
        }
      </div>
    </aside>
  )
}

export default SideBar