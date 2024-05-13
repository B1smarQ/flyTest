import { useEffect,useState,useRef } from "react";
import TestContainer from "./testsContainer/testContainer";
import Button from "./Button/Button";
import Header from "./Header/header";

export default function HomePage(){
  let [tests, setTests] = useState([]);
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