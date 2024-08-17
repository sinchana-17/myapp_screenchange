import {useState,useEffect} from 'react'

//const[state,setState]=useState('ram');
//useEffect(()=?{},[])

const First=(props)=>{
 const [city,setCity]=useState("bangalore")
 useEffect(()=>{
     if(city === "hyderabad")
          {
              setCity("gokarna")
              }
          else{
              setCity("goa")
              }

     },[])


    return(
      <div>
          <h1>{city}</h1>
              </div>
              /* <>
        <h1>{}</h1>
        <img className="pic" src="homwpgimg.jpg" alt="alternate"/>
        </> */
        )

}
export default First;