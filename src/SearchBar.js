import { useRef } from "react";

const SearchBar = ({searchFunc}) => {
    let input=useRef();
   
    return (<>
    <input type="text" ref={input}/>
    <input type="button" value="search" onClick={()=>searchFunc(input.current.value   )}/>
    </>  );
}
 
export default SearchBar;