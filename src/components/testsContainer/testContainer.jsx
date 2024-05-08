import { useState } from "react"
import TestElement from "../testElement/testElement"
import './testContainer.css'


export default function TestContainer({tests}){
    const [test,setTest] = useState(tests)
    return(
        <div id="testContainer">
            {test.map((t) =>{
                return(
                    <TestElement name = {t.name} key = {t.id}/>
                )
            }
        )}
        </div>
    )
}