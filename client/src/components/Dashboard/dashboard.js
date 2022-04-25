import React, {useState, useEffect } from 'react'
import './dashboardStyle.css';
import { BrowserRouter, HashRouter, Routes, Route, NavLink } from 'react-router-dom';

import { getUserEmissions } from '../../service';
import { UserForm } from '../Form/userForm';
import { HomePg } from '../HomePage/homePg';
import { NeutralizePg } from '../NeutralizePage/neutralizePg';
import treeSvg from '../../Utils/tree-svg.svg';

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
        <div className='layout-container'>
          <div className='navbar-container'>
            <div className='brand-container'>
              <NavLink to='/' style={{ textDecoration: 'none' }}>
                {/* <h1 className='appTitle'>Ec</h1> */}
                <span className='appTitle'>Ec</span>
                <img className='appBrand' src={treeSvg} alt=''></img>
              </NavLink>
            </div>
            <div className='nav-settings'>
              <ul className='header-navbar'>
                <li><NavLink to="/" style={{ textDecoration: 'none' }}>Home</NavLink></li>
                <li><NavLink to="/profile" style={{ textDecoration: 'none' }}>Profile</NavLink></li>
                <li><NavLink to="/neutralize" style={{ textDecoration: 'none' }}>Become Carbon Neutral</NavLink></li>
              </ul>
            </div>
          </div>
          <div className='content-container'>
            <Routes>
              <Route path='/' element={<HomePg />} />
              <Route path='/profile' element={<UserForm setCardsList={setCardsList} />} />
              <Route path='/neutralize' element={<NeutralizePg />} />
            </Routes>
          </div>
          <div className='footer-content'>
            <div className='footer-brand'>
              <img className='appBrand' src={treeSvg} alt=''></img>
            </div>
          </div>
        </div>
      {/* </HashRouter> */}
      </BrowserRouter>

    </>
  )
}