import { Link } from "react-router-dom";

export default function TestElement({name}){
    return (
        <div>
            <h2>{name}</h2>
            <Link>
                <button onClick = {() => document.getElementById("testContainer").style.display = "none"}> START </button>
            </Link>
        </div>
    )
}