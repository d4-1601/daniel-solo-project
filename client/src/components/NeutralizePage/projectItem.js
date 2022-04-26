import React from 'react'

export function ProjectItem({projectData}) {
  return (
    <>
      <div>projectItem</div>
      <li>
        <div className='singleProject'>
          <div className='projectCard'>
            <div className='cardImage'>
              <img className='countryImage' src={projectData.imgUrl} alt=''></img>
            </div>
            <div className='cardInfo'>
              <div className='countryName'>Country: {projectData.country}</div>
              <div className='initialPrice'>Price from: ${projectData.startingPrice}</div>
              <div className='treesName'>Trees: {projectData.treeSpecies}</div>
              <div className='siteLink'>Webpage: <a href={projectData.url}>Click here</a></div>
            </div>
          </div>
        </div>
      </li>

    </>
  )
}