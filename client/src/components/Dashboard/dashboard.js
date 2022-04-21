import React, {useState, useEffect } from 'react'

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
        <UserForm setCardsList={setCardsList}></UserForm>
      </div>

    </>
  )
}