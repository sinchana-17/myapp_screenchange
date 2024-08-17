import {useState,useEffect,updateSize} from 'react'

const Screenchange=()=>{

    const [ScreenSize,setScreenSize]=useState({
        width:window.innerWidth,
        height:window.innerHeight,
        })

   const updateSize=()=>{
       setScreenSize({
            width:window.innerWidth,
            height:window.innerHeight,
           })
       }
    useEffect (()=>{
        window.addEventListener('resize',updateSize);
        return()=>
        {
            window.removeEventListener('resize',updateSize);
         };
        },[]);
    return (
        <div>
            <p style={{color:'red'}}>Width.{ScreenSize.width}px</p>
            <p style={{color:'orange'}}>Height.{ScreenSize.height}px</p>
            </div>
            )}

export default Screenchange;