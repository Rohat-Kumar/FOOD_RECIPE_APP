import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const Mealinfo = () => {
    const {mealid} = useParams();
    const [info, setinfo] = useState()

    console.log(mealid)

    const getInfo = async () => {
        const get = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
        const jsonData = await get.json()
        console.log(jsonData.meals[0])
        setinfo(jsonData.meals[0])
    }
    if(info != "" ){
        getInfo()
    }
  return (
    <div>
        {!info ? "Not Found" : 
        <div className='mealInfo'>
      <img src={info.strMealThumb}/>
      <div className='info'> 
        <h1>Recipe Details</h1>
        <button>{info.strMeal}</button>
        <h3>Instructions</h3>
        <p>{info.strInstructions}</p>
      </div>
    </div>
    }
    </div>
    
  )
}

export default Mealinfo
