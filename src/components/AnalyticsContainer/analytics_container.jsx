import { useState } from "react"

export default function AnalyticsContainer({student_results}){
    let [stud_results, setResults] = useState(student_results)
    return(
        <div className="analytics-container">
            {stud_results?.map((student) =>{
                return(
                    <div className="student-result">
                        <div className="student-name"><h2>{student.name}</h2></div>
                        <div className="student-score"><p>{student.avg_results}</p></div>
                    </div>
                )
            })}
        </div>
    )
}