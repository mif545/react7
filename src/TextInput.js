import { useState } from "react";
import useCount from './useCount'
const TextInput = () => {
    // const [count,setCount]=useState(0);
    // const inc=()=>{
    //     setCount(count+1)
    // }

    const {inc,count}=useCount(4)
    return ( <><p>{count}</p>
    <input type="test" onChange={inc}/>
    </> );
}
 
export default TextInput;