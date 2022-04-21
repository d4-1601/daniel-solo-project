import React, { useState } from 'react';

import './formStyle.css';

export function UserForm({ setCardsList }) {

  //Diet constants by country
  const foodDiet = {
    Argentina: 5.480,
    Brazil: 4.489,
    France: 4.090,
    Peru: 2.036,
    Usa: 4.700
  };
  //Show output figures
  const [qPeople, setQPeople] = useState (0);
  const [qCountry, setQCountry] = useState ('');
  let foodForecast = Math.round(foodDiet[qCountry] * qPeople * 30); //daily food figure per person* #people* 30 days per month
  const [qElectricity, setQElectricity] = useState (0);
  let electricityForecast = Math.round(qElectricity * 0.41205); //monthly figure
  const [qGas, setQGas] = useState (0);
  let gasForecast = Math.round(qGas * 0.184); //monthly figure

  //Fetch form
  const submitHandler = (ev) => {
    ev.preventDefault();
    //form inputs
    //const people = parseInt(ev.target.userPeople.value);
    const people = ev.target.userPeople.value;
    const country = ev.target.userCountry.value;
    const electricity = ev.target.userElectricity.value;
    const naturalGas = ev.target.userGas.value;

    //new obj from form
    const newCard = {people, country, electricity, naturalGas};
    console.log('Print Test of form: ', newCard);//printing all form inputs as string
    // console.log('This is the type of people', typeof(newCard.people));//converted to number on line 10

  }
  return (
    <>
      <h3>userForm</h3>
      <div className='form-container'>
        <form onSubmit={submitHandler}>
          <label>
            Quantity of people living with you
            <input className='formInfo' type='number' name='userPeople' onChange={e => setQPeople(e.target.value)}></input>
          </label><br></br>
          <label>
            Select your country to get the average food diet figure
            <input className='formInfo' type='text' name='userCountry' onChange={e => setQCountry(e.target.value)}></input>
            {/*
            <select>
              <option value="Argentina">Argentina</option>
              <option value="Brazil">Brazil</option>
              <option value="France">France</option>
              <option value="Peru">Peru</option>
              <option value="Usa">United States</option>
            </select>
            */}
          </label><br></br>
          <label>
            Monthly consumption of electricity in kwh
            <input className='formInfo' type='number' name='userElectricity' onChange={e => setQElectricity(e.target.value)}></input>
          </label><br></br>
          <label>
            Monthly consumption of gas in kwh
            <input className='formInfo' type='number' name='userGas' onChange={e => setQGas(e.target.value)}></input>
          </label><br></br>
          <button type='submit'>Update Here</button>
        </form>
      </div>
      <div className='formOutput-container'>
        <h3>Carbon Emissions Forecast</h3>
        <p>Food diet: {foodForecast} KgCO2/Month</p>
        <p>Electricity: {electricityForecast} KgCO2/Month</p>
        <p>Gas: {gasForecast} KgCO2/Month</p>
      </div>
    </>
  )
}