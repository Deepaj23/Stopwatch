import Button from "./Button";
import Display from "./Display";
import { useState } from "react";
import { Link } from "react-router-dom"

function Stopwatch() {
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 })
    const [inter, setInter] = useState();
    const [status, setStatus] = useState(0);

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

    const start = () => {
        run();
        setInter(setInterval(run, 10));
        setStatus(1);
    }

    const run = () => {

        if (updatedM === 60) {
            updatedH++;
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedS = 0;
            updatedM++;
        }

        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH })
    }
    const stop = () => {
        clearInterval(inter);
        setStatus(0);
    }
    const reset = () => {
        clearInterval(inter);
        setTime({ ms: 0, s: 0, m: 0, h: 0 });
        setStatus(0);
    }
    return (
        <div className="App">
            <h1>STOP WATCH</h1>
            <Display time={time} />
            <Button start={start} stop={stop} reset={reset} status={status} />
            <nav>
                <Link to="/">HOME</Link>
            </nav>
        </div>
    )
}
export default Stopwatch;