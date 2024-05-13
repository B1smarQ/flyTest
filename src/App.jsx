import './App.css'
import { BrowserRouter as Router, Route,Routes, Navigate } from 'react-router-dom'
import TestPage from './test.jsx'
import HomePage from './components/home.jsx'
import AnalyticsPage from './analytics.jsx'
import StudentPage from './student_stats.jsx'
import WhiteboardPage from './components/whiteboard/whiteboard'
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
      <Route path=  '/student/:id' element = {<StudentPage/>}></Route>
      <Route path = '/whiteboard' element = {<WhiteboardPage/>}></Route>
    </Routes>
  </Router>

  </>
  )
}

export default App
