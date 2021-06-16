import React, { useState } from 'react';
import './App.css';
import ImageCard from './ImageCard';
import SearchBar from './SearchBar';
import TextInpt from './TextInput'
import axios from 'axios'
import TextInput from './TextInput';
function App() {
  let [images,setImages]=useState([])

  const search=(txt)=>{
   console.log(txt)
   axios.get(`https://api.unsplash.com/search/photos/?client_id=i1nDeZ3QqQ9LJMm7qdXslSVnFF4xZX7RireX4sgkOBI&query=${txt}&color=pink`)
   .then(response=>{console.log(response);
  setImages([...response.data.results])}).catch(err=>console.log(err))
  }

  return (
    <TextInput/>

  //   <div className="App">
  //  <SearchBar searchFunc={search}/>
  //  <div className="container">
  //  {
  //    images.map((item,index)=>{
  //   return <ImageCard key={item.id} image={item}/>
  //    })
  //  }
  //  </div>
  //   </div>
  );
}

export default App;
