import './question.css';

export default function Question({question}){
    

    return(
        <form>
            <h2>{question.content}</h2>
            
            
            <select className='question' questionid = {question.id} >
                {question.answers.map(option => {
                return(
                    <>
                    <option value = {option.id} > {option.content} </option>
                    </>
                )
                })}
            </select>
            
            

        </form>
    )
}