import React, { useState } from 'react';

import './formStyle.css';
import { postEmissions } from '../../service';
import { FormOutput } from '../FormCalcs/formOutput';

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
  let foodForecast = (Math.round(foodDiet[qCountry] * qPeople * 30)).toString(); //daily food figure per person* #people* 30 days per month
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
    const newCard = {people, country, electricity, naturalGas, foodForecast, electricityForecast, gasForecast};
    console.log('Print Test of form: ', newCard);//printing all form inputs as string
    // console.log('This is the type of people', typeof(newCard.people));//converted to number on line 10
    //fetch form data
    postEmissions(newCard)
      .then(thisCard => {
        setCardsList(prevCards => [...prevCards, thisCard])
      });

      //clean up form values
      ev.target.reset();
  }
  return (
    <>
      <div className='form-title'>
        <h3>Your Profile</h3>
      </div>
      <div className='formForecast-container'>
        <div className='form-container'>
          <form onSubmit={submitHandler}>
            <div className='field-group'>
              <label>
                Quantity of people living with you:<br></br>
                <input className='formInfo' type='number' name='userPeople' onChange={e => setQPeople(e.target.value)}></input>
              </label>
            </div>
            <div className='field-group'>
              <label>
                Select your country to get the average food diet figure:<br></br>
                {/* <input className='formInfo' type='text' name='userCountry' onChange={e => setQCountry(e.target.value)}></input> */}

                <select className='formInfo' name='userCountry' onChange={e => setQCountry(e.target.value)}>
                  <option value=""> -- select an option -- </option>
                  <option value="Argentina">Argentina</option>
                  <option value="Brazil">Brazil</option>
                  <option value="France">France</option>
                  <option value="Peru">Peru</option>
                  <option value="Usa">United States</option>
                </select>

              </label>
            </div>
            <div className='field-group'>
              <label>
                Monthly consumption of electricity in kwh:<br></br>
                <input className='formInfo' type='number' name='userElectricity' onChange={e => setQElectricity(e.target.value)}></input>
              </label>
            </div>
            <div className='field-group'>
              <label>
                Monthly consumption of gas in kwh:<br></br>
                <input className='formInfo' type='number' name='userGas' onChange={e => setQGas(e.target.value)}></input>
              </label>
            </div>
            <div className='field-button'>
              <button type='submit'>Save</button>
            </div>
          </form>
        </div>
        <div className='forecast-container'>
          <FormOutput foodForecast={foodForecast} electricityForecast={electricityForecast} gasForecast={gasForecast}></FormOutput>
        </div>
      </div>
    </>
  )
}