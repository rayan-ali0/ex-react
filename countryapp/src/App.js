import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { Country } from '../Components/Country.js'

function App() {
  const url="https://restcountries.com/v3.1/all"
  const [countries,setCountries]=useState(null);
  const [input,setInput]=useState("Lebanon");

  const getData = async() => {
    return await fetch(url)
    .then((response)=> response.json())
    .then((data)=>setCountries(data))
      // return data;
    
    .catch((error)=>{
      console.log("Error :",error)
    })
      ;
      
  }
  const getInput= ()=>{
const value=document.getElementById('search').value;
 setInput(value);
 
  }
console.log(countries)

  useEffect(()=>{
getData()
  },[])


  useEffect(() => {
    // This effect will log the updated input value when it changes.
    console.log(input);
  }, [input]);
  return (
    <div className="App">

<input type="text" id="search"/>
<button type="button" onClick={getInput}>Submit</button>
<Country showCountry={input}/>
  </div>
  );
}

export default App;
