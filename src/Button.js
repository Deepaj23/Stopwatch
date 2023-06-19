import React from "react";


const Button = ({ start, status, reset, stop }) => {
    return (
        <div>

            {status === 0 && <button onClick={start}>Start</button>}
            {status === 1 &&

                <div>
                    <button onClick={reset}>Reset</button>&nbsp;
                    <button onClick={stop}>Stop</button>&nbsp;
                </div>
            }


        </div>
    );
}

export default Button; 