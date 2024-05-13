import { useEffect,useState,useRef } from "react";
import TestContainer from "./testsContainer/testContainer";
import Button from "./Button/Button";
import Header from "./Header/header";

export default function HomePage(){
let date =  Date.now();
  let [time,setTime] = useState(0);
  let hours = String(Math.floor(time/3600)).padStart(2,'0');
  let minutes = String(Math.floor(time/60)).padStart(2,'0');
  let seconds = String(time%60).padStart(2,'0');
  let [running,setRunning] = useState(true);
  let [tests, setTests] = useState([]);
  let testId = 1;
  async function parseTests(){
    const response = await fetch(' http://localhost:8081/api/v1/fly ');
    if(response.ok){    
      let data = response.json();
      data.then((e) => {setTests(e)});
    }
    
  }

  useEffect(()=>{
    parseTests();
  },[])


  return (
    
    <div>
      <Header/>
      <TestContainer tests = { tests }></TestContainer>
      

    </div>
  )
}