
import {  useNavigate } from "react-router-dom"

function Stop() {
    const navigate =useNavigate();
    return (
        <div>
            <h1>STOPWATCH</h1>
            <nav>
                <button onClick={()=>navigate('/Home')}>Thanks for use me</button>
            </nav>
        </div>
    )
}
export default Stop;
