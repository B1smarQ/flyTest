import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import TestLink from "../links/link.jsx";
export default function TestElement({testid, name}){
    const dataToPass = {testid:1,name:'{name}'}
    return (
        <div>
            <h2>{name}</h2>
            <Link to= {{pathname:`/test/${testid}`}}>Start</Link>
        </div>
    )
}