import { useState } from "react"
import TestElement from "../testElement/testElement"
import './testContainer.css'
import {tests} from '../../test.js'
import { BrowserRouter, Link } from "react-router-dom"
export default function TestContainer({tests}){
    const test = tests;
    return(
        <div id="testContainer">
            {test.map((t) =>{
                return(
                    
                    <TestElement testid = {t.id} name = {t.name} key = {t.id}/>
                    
                    
                )
            }
        )}
        </div>
    )
}