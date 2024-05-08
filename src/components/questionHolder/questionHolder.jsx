import Question from '../question/question';
import './questionHolder.css'
import Button from '../Button/Button.jsx';
import { useState, useEffect } from 'react';
export default function QuestionHolder({questions}){
  const [quests, setQuests] = useState(questions);
    return(
      <div className=  'quest_grid'>
        {quests?.map((question) =>{
          return(
            <Question question = {question} key = {question.id}/>
          )
        })}
      </div>
      
    )
}