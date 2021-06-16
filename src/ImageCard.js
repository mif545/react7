import { useEffect, useRef, useState } from "react";

const ImageCard = ({image}) => {
    const [spans,setSpan]=useState(1);
    useEffect(()=>{
        imag.current.addEventListener('load',setSpans)
        // return ()=>{
        //     imag.current.removeEventListener('load',setSpans) 
        // }
    },[])
    const setSpans=()=>{
      let span1=Math.ceil( imag.current.clientHeight)+7
      setSpan(span1);
    }
    let imag=useRef(null);
    return (<div style={{gridRowEnd:`span ${spans}`}}>
        <img src={image.urls.regular}  ref={imag}/>
    </div>  );
}
 
export default ImageCard;