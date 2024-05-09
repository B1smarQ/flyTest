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
  const timeInterval = useRef();
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
  function getAnswers(){
    let testanswers = {
      testid:testId,
      answers:[],
      time:time
    }
    let ans_arr = document.getElementsByClassName('question');
    
    for ( let i of ans_arr){
      let obj = {};
      obj.answerid = i.options[i.selectedIndex].value;
      obj.questionid = i.attributes[1].value;

      testanswers.answers.push(obj);
    }
    console.log(testanswers);
 
  }
  useEffect(()=>{
    parseTests();
  },[])
  useEffect(()=>{
    return() =>clearInterval(timeInterval.current);
  },[])

  useEffect(()=>{
    if(running){
      timeInterval.current = setInterval(()=>{
        setTime(++time);
      },1000)
    }
    else{
      clearInterval(timeInterval.current);
      timeInterval.current = null;
    }
  },[running])
  return (
    
    <div>
      <Header/>
      <TestContainer tests = { tests }></TestContainer>
      

    </div>
  )
}