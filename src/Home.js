import {  useNavigate } from "react-router-dom"

function Home() {
    const navigate =useNavigate();
    return (
        <div>
            <h1>STOPWATCH</h1>
            <nav>
                <button onClick={()=>navigate('/Stopwatch')}>Click to Use StopWatch</button>
                <button onClick={()=>navigate('/Stop')}>Stop</button>               
            </nav>
        </div>
    )
}
export default Home;
