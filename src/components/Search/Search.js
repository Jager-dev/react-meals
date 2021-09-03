import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Search = () => {
  const history = useHistory()
  const [inputValue, setInputValue] = useState("")
  const handleSearch = (e) => {
    setInputValue(e.target.value.toLowerCase())
  }
  const enterPress =(e)=>{
    if(e.key === "Enter"){
      handleClick()
    }
  }
  const handleClick = ()=> {
    history.push(`/browse/${inputValue}`)
    setTimeout(() => setInputValue(""), 1000)
  }
  return (
    <div className='input__search'>
      <input type="text" onKeyPress={enterPress} onChange={handleSearch} value={inputValue} className="input-group-text" id="inputGroup-sizing-default" placeholder={'Please, enter the name of the food'}/>
      <button onClick={handleClick} disabled={!inputValue.trim()} className='btn__search'>Search</button>
    </div>
  );
};

export default Search;