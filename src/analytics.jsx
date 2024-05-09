import AnalyticsContainer from "./components/AnalyticsContainer/analytics_container";
import { user_results } from "./testDB/student_results";
import { Link } from "react-router-dom";
export default function AnalyticsPage(){
    return(
        <div>
            <h1>Analytics Page</h1>
            <AnalyticsContainer student_results={user_results}></AnalyticsContainer>
            <Link to = '/'>Home</Link>
        </div>
    )
}