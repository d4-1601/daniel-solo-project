import React from 'react'

export function MonthItem({monthData}) {
  const monthlyElectricity = Number(monthData.electricityForecast);
  const monthlyGas = Number(monthData.gasForecast);
  const monthlyFood = Number(monthData.foodForecast);
  const monthlyTotal = monthlyElectricity + monthlyGas + monthlyFood;
  const treeFigureMonthly = 13.92;
  const offsetSuggestion = Math.round(monthlyTotal / treeFigureMonthly);

  return (
    <>
      <li>
        <div className='singleMonth'>
          <div className='emissionInfo'>{monthData.monthTag}</div>
          <div className='emissionInfo'>{monthlyTotal}</div>
          <div className='emissionInfo'>{offsetSuggestion} trees</div>
        </div>
      </li>
    </>
  )
}
