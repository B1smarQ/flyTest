import './Button.css'
export default function({children,onClick,className}){
    return(
        <button onClick = {onClick} className = {className}>{children}</button>
    )
}