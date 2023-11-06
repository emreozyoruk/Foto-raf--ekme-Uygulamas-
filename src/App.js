import { useState } from 'react';
import './App.css';
import SearchHeader from './SearchHeader';
import  searchImages from "./api"
import Fotos from "./components/fotos"


function App() {
  const [fotolar , setFotolar] = useState([])
  const handleSubmit = async (kelime) =>  {
   const result = await searchImages(kelime);
   setFotolar(result)
  };

  return (
    <div className="App">
      <SearchHeader kelime = {handleSubmit} />
      <Fotos imagesPlaceHolder = {fotolar}  />
    </div>
  )
}

export default App;
