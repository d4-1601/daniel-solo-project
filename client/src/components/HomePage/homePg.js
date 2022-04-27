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
              Help the world to be more sustainable<br></br>
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
        <div className='welcome-container'>
          <div className='logoTitle-box'>
            <div className='logo-box'>
              <span className='appTitleLogo'>Ec</span>
              <img className='appBrandLogo' src={treeSvg} alt=''></img>
              </div>
            <div className='title-box'>
              <span className='welcomeTitle'>
                Welcome to Eco<br></br>
              </span>
            </div>
          </div>
          <div className='aboutEnvironment-box'>
            <p className='first-paragraph'>
              CO2 emissions have increased from 2 billion tons in 1900 to a staggering<br></br>
              36.5 billion tons in 2018. Understanding our impact on the world is the<br></br>
              first step to achieving environmental sustainability. Globally, the average<br></br>
              carbon footprint is closer to 4 tons (while much higher in developed<br></br>
              countries - EU average equals 13.8 tons -). To have the best chance of<br></br>
              avoiding a 2℃ rise in global temperatures, the average global carbon<br></br>
              footprint per year needs to drop to under 2 tons by 2050.
            </p>
            <p className='second-paragraph'>Do your part to create a more sustainable future for our planet.</p>
            <p className='third-paragraph'>
              <br></br><span className='question'>What is carbon footprint?</span><br></br><br></br>
              A carbon footprint is **the total greenhouse gas (GHG) emissions caused by an <br></br>
              individual, event, organization, service, place or product, expressed as carbon <br></br>
              dioxide equivalent (CO2e)**
            </p><br></br>
            <p>
            <span className='question'>What is carbon offsetting?</span><br></br><br></br>
              Is the term used to define contributions towards reversing the emission curve, e.g. <br></br>
              by means of purchasing carbon credits or tree planting. A carbon credit is a generic <br></br>
              term for any tradable certificate or permit representing the right to emit one tonne <br></br>
              of carbon dioxide or the equivalent amount of a different greenhouse gas.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}