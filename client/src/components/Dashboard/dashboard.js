import React, {useState, useEffect } from 'react'
import './dashboardStyle.css';

import { getUserEmissions } from '../../service';
import { UserForm } from '../Form/userForm';

export function Dashboard() {

  const [cardsList, setCardsList] = useState([]);

  useEffect(() => {
    getUserEmissions().then((data) => {
      console.log(data);
      setCardsList(data)
    })
  }, [])

  return (
    <>
      <div>dashboard</div>
      <div className='layout-container'>
        <ul className='header-navbar'>
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/neutralize">Become Carbon Neutral</a></li>
        </ul>
        <div className='profile-container'>
          <UserForm setCardsList={setCardsList}></UserForm>
        </div>
      </div>

    </>
  )
}