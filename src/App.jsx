import { useEffect,useState } from 'react'
import './App.css'
import {questions} from './question.js'
import Question from './components/question/question.jsx'
import QuestionHolder from './components/questionHolder/questionHolder.jsx'
import Button from './components/Button/Button.jsx'
import { useRef } from'react'
import debounce from 'debounce'
import axios from 'axios'
import TestContainer from './components/testsContainer/testContainer.jsx'
function App() {
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
    if(!response.ok){
      console.log('error');
      return Promise.reject(new Error('failed to parse'));
    }
    const data = response.json();
    setTests(data);
    
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
  let [questions_cards,setQuestions] = useState(questions)
  return (
    
    <div>
      <TestContainer tests = { tests }></TestContainer>
      <h1>TEST</h1>
      <p>{hours}:{minutes}:{seconds} </p>
      <Button onClick = {() =>{
        if(running){
          getAnswers();
          setRunning(false);
        }
        }}>Submit</Button>
      
    </div>
  )
}

export default App
