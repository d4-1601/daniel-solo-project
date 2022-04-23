import React from 'react'
import './outputStyle.css';

export function FormOutput(props) {
  return (
    <>
      <h3>Carbon Emissions Forecast</h3><br></br>
      <p>Food diet: {props.foodForecast} KgCO2/Month</p>
      <p>Electricity: {props.electricityForecast} KgCO2/Month</p>
      <p>Gas: {props.gasForecast} KgCO2/Month</p>
    </>
  )
}