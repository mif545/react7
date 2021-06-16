import { useState } from "react";
/////////custem Hook  לקוד כפול
const useCount = (cnt) => {
    const [count,setCount]=useState(cnt);
    const inc=()=>{
        setCount(count+1)
    }
    const reaset=()=>{
        setCount(0)
    }

    return {inc,reaset,count};
}
export default useCount;