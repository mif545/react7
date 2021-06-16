import { useState } from "react";
import useCount from './useCount'
const ButtenInput = () => {
    // const [count,setCount]=useState(0);
    // const inc=()=>{
    //     setCount(count+1)
    // }
    // const reaset=()=>{
    //     setCount(0)
    // }
    const {inc,reaset,count}=useCount(5)
    return ( <><p>{count}</p>
    <input type="butten" onClick={inc}/>
    <input type="butten" value="reset" onClick={reaset}/>
    </> );
}
 
export default ButtenInput;