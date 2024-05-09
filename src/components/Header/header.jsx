import './header.css'
import { Link } from 'react-router-dom'
import user from '../../images/user.svg'
export default function Header(){
    return(
        <header>
            <Link to = '/analytics'>Prepodovatelyam</Link>
            <div>
            <img src = {user}></img>
            <p>John Doe</p>
            </div>
        </header>
    )
}