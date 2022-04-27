import React from 'react'

export function FormOutput(props) {
  return (
    <>
      <h3>Carbon Emissions Forecast</h3><br></br>
      <p>Food diet: {props.foodForecast} kg CO<sub>2</sub>/Month</p>
      <p>Electricity: {props.electricityForecast} kg CO<sub>2</sub>/Month</p>
      <p>Gas: {props.gasForecast} kg CO<sub>2</sub>/Month</p>
    </>
  )
}