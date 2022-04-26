import React from 'react';

import './neutralizeStyle.css';
import { MonthItem } from './monthItem.js';
import { ProjectItem } from './projectItem.js';

export function NeutralizePg({ cardsList, projectsList }) {
  return (
    <div className='offsetContent-container'>
      <div className='offsetOptions-container'>
        <div>TBD and display the projects to offset emissions and render card as list</div>
      </div>
      <div className='emissionsBalance-container'>
        <div className='emissionsTitle-box'>
          <span> Emissions Balance</span>
        </div>
        <div className='emissionsTable-box'>
          <div className='tableHeader'>
            <div className='fieldHeader'>Month</div>
            <div className='fieldHeader'>Total Emissions</div>
            <div className='fieldHeader'>Offset Target</div>
          </div>
          <div className='tableContent'>
            <ul className='listOfMonths'>
              {cardsList.map((monthData) => {
                return <MonthItem key={monthData._id} monthData={monthData}></MonthItem>
              })}
            </ul>
          </div>
        </div>
      </div>

    </div>
  )
}