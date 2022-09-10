import logo from './logo.svg';
import {useState} from"react"
import './App.css';
import { createContext, useEffect, useContext } from "react"

export const AppContext = createContext(null)

function App() {

  //const { latestHero, setLatestHero } = useContext(AppContext)
  const [ latestHero, setLatestHero ] = useState('')
  
  /*
  useEffect(() => {
    fetch("http://localhost:3000/latest")
      .then((response) => response.json)
      .then((data) => {
        console.log('------')
        console.log(data)
        console.log('------')
    })
  },[latestHero])
*/


  function handleSubmit(event) {
    event.preventDefault()
    console.log('aaaaaaaaaaa')
    console.log( event.target[0].files[0])
    console.log('aaaaaaaaaaa')

    const data = new FormData()
    data.append("hero[image]", event.target[0].files[0])
    submitToAPI(data)
  }


  function submitToAPI(data) {
    fetch("http://localhost:3000/heros", {
      method: "POST",
      body: data
    })
      .then((response) => response.json())
      .then((data) => {
       // console.log(data)
      //setLatestHero(data.image_url)
        fetch("http://localhost:3000/latest")
          .then((response) => response.json())
          .then((data) => {
          console.log(data)
        })
    })
   
  }

  return (
    <AppContext.Provider >
    <div className="App">
        <div className="form-div">
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="hero">Hero</label>
            <input type="file" name="hero" id="hero" />
            
            <button type="submit">Create hero</button>
            </form>
      </div>
      </div>
      </AppContext.Provider>
  );
}

export default App;
