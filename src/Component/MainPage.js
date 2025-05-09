import React, { useState } from 'react'
import MealCards from './MealCards'

const MainPage = () => {

   const [data, setdata] = useState() 
   const [search, setsearch] = useState("")
   const [msg, setmsg] = useState("")

const handleinput = (event) => {
    setsearch(event.target.value)
}
const myFun = async() => {
    if(search == ""){
        setmsg("please enter something")
    }
    else{
         const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
         const jsonData = await get.json()
 //      console.log(jsonData.meals)
         setdata(jsonData.meals)
         setmsg("")

    }
   
}

//console.log(data)

  return (
    <>
    <h1 className='head'>FOOD RECIPE APP</h1>
    <div className='container'>
        <div className='searchBar'>
            <input type='text' placeholder='Enter Dishes' onChange={handleinput}/>
            <button onClick={myFun}>Search</button>
        </div>
        <h4 className='error'>{msg}</h4>
        <div>
            <MealCards detail={data}/>
        </div>
    </div>
    </>
  )
}

export default MainPage
