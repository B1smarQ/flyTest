import Question from '../question/question';
import './questionHolder.css'
import Button from '../Button/Button.jsx';
import { useState, useEffect, useRef, createRef } from 'react';
import axios from 'axios';
export default function QuestionHolder({questions, testId}){
  const quests = questions;
  let [time,setTime] = useState(0);
  let hours = String(Math.floor(time/3600)).padStart(2,'0');
  let minutes = String(Math.floor(time/60)).padStart(2,'0');
  let seconds = String(time%60).padStart(2,'0');
  const timeInterval = useRef();
  let [name,setName] = useState('');
  let [email,setEmail] = useState('');
  let [group,setGroup] = useState('');
  let [running,setRunning] = useState(true);
  const API_POST_URL = 'http://localhost:8081/api/v1/fly/res';
  const API_TEST_URL = 'https://jsonplaceholder.typicode.com/posts';

  
  function getAnswers(){
    let testanswers = {
      flyId:testId,
      answers:[],
      time:time
    }
    
    let ans_arr = document.getElementsByClassName('question');
    
    for ( let i of ans_arr){
      let obj = {};
      obj.questionId = i.attributes[1].value;
      obj.answerId = i.options[i.selectedIndex].value;
      testanswers.answers.push(obj);
    }
    {
      try{
        let response = axios.post(API_POST_URL,{
                  
          flyId:testanswers.flyId,
          name:name,
          group:group,
          email:email,
          questionResponses:testanswers.answers,
          time:testanswers.time
          
        }).then(response =>console.log(response));
        
        
        
    } catch(error){
      alert(error);
    }
 
  }
}
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
  function handleInput(event, method){
    method(event.target.value);
  }
    return(
      <div className=  'quest_grid'>
        <p>{hours}:{minutes}:{seconds} </p>
        {quests?.map((question) =>{
          return(
            <Question question = {question} key = {question.id}/>
          )
        })}
        <form id = 'QuestionForm' onSubmit = {getAnswers}>
          <input type = 'text' placeholder='Введите ФИО' required id = "name_field" onChange = {(event) =>handleInput(event,setName)}></input>
          <input type = 'email' placeholder='Введите email' required id = 'email_field'onChange = {(event) =>handleInput(event,setEmail)}></input>
          <input type = 'text' placeholder='Введите номер группы' required id = 'group_field' onChange = {(event) =>handleInput(event,setGroup)}></input>
        </form>
        <Button onClick = {()=>{
          if(name && group && email){
          getAnswers();
          setRunning(false);
        }
        else{
          alert('Заполните все поля');
        }
          }}>Submit</Button>
      </div>
      
    )
}