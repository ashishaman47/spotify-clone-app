import React from 'react';
import './SidebarOption.css';

//here we are passing 2 props item and (Icon which is an Component)
function SidebarOption({ title, Icon }) {
  return (
    <div className='sidebarOption'>
      {/* if there is icon then render render the icon which we passed in */}
      {Icon && <Icon className='sidebarOption__icon' />}
      {/* if there is icon then display title in h4 */}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
