import React, {useState, useEffect } from 'react'
import './dashboardStyle.css';
import { BrowserRouter, HashRouter, Routes, Route, NavLink } from 'react-router-dom';

import { getUserEmissions } from '../../service';
import { UserForm } from '../Form/userForm';
import { HomePg } from '../HomePage/homePg';
import { NeutralizePg } from '../NeutralizePage/neutralizePg';

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
      <BrowserRouter>
      {/* <HashRouter>*/}
        <div>dashboard</div>
        <div className='layout-container'>
          <ul className='header-navbar'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
            <li><NavLink to="/neutralize">Become Carbon Neutral</NavLink></li>
          </ul>
          <div className='content-container'>
            <Routes>
              <Route path='/' element={<HomePg />} />
              <Route path='/profile' element={<UserForm setCardsList={setCardsList} />} />
              <Route path='/neutralize' element={<NeutralizePg />} />
            </Routes>
          </div>
        </div>
      {/* </HashRouter> */}
      </BrowserRouter>

    </>
  )
}