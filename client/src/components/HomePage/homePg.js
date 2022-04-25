import React from 'react'

import './homeStyle.css';
import treeSvg from '../../Utils/tree-svg.svg';

export function HomePg() {
  return (
    <div className='intro-container'>
      <div className='left-container'>
        <div className='logoText-container'>
          <div className='introLogo-box'>
            <img className='introBrand' src={treeSvg} alt=''></img>
          </div>
          <div className='introText-box'>
            <span className='upperText'>
              Help the world to be more green<br></br>
              starting with yourself!<br></br><br></br>
            </span>
            <span className='bottomText'>
              Track your carbon emissions.<br></br>
              Set goals.<br></br>
              Reduce emissions.<br></br>
              Contribute to a greener world.
            </span>
          </div>
        </div>
      </div>

      <div className='right-container'>
        <div className='welcome-container'></div>
      </div>
    </div>
  )
}
