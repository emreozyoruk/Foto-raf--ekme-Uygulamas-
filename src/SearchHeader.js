import { useState } from "react";

function SearchHeader({kelime}) {

  const degerDegistir = (event) => {
  setDeger(event.target.value)
  }

  const [deger , setDeger] = useState(" ")

  const handleFormSubmit = (event) => {
    event.preventDefault()
  kelime(deger)
    } 

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit} >
        <label>Ne Arıyorsunuz?</label>
        <input value={deger} onChange={degerDegistir} />
        
      </form>
    </div>
  );
}

export default SearchHeader;
