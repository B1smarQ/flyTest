import { useEffect,useState } from 'react'
import './App.css'
import {questions} from './question.js'
import Button from './components/Button/Button.jsx'
import { useRef } from'react'
import debounce from 'debounce'
import axios from 'axios'
import TestContainer from './components/testsContainer/testContainer.jsx'
import { BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom'
import TestPage from './test.jsx'
import HomePage from './components/home.jsx'
import AnalyticsPage from './analytics.jsx'
function App() {
  return(
  <>
  
  <Router>
    <Routes>
      
      <Route path = '/test/:id' element = {<TestPage/>}>

      </Route>
      <Route path = '/' element = {<HomePage/>}>

      </Route>
      <Route path=  '*' element = {<Navigate to='/'/>}></Route>
      <Route path = '/analytics' element = {<AnalyticsPage/>}></Route>
    </Routes>
  </Router>

  </>
  )
}

export default App
