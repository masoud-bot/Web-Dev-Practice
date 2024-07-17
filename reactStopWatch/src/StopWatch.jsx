import {useEffect, useRef, useState} from "react";

export default function StopWatch() {

    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalIdrRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {
        if (isRunning) {
            intervalIdrRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10)
        }

        return () => {
            clearInterval(intervalIdrRef.current);
        }

    }, [isRunning]);

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    function stop() {
        setIsRunning(false);
    }
    function reset() {
        setElapsedTime(0);
        setIsRunning(false);
    }

    function formatTime() {

        let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
        let minutes = Math.floor(elapsedTime / (1000 * 60 )% 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minutes = String(minutes).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${hours}:${minutes}:${seconds}:${milliseconds}`;
    }
    return (
        <>
            <p className={'icon'}>⏰</p>
            <div className={"stop-watch"}>
                <div className="display">{formatTime()}</div>
                <div className="controles">
                    <button className={"start-btn"} onClick={start}>Start</button>
                    <button className={"stop-btn"} onClick={stop}>Stop</button>
                    <button className={"reset-btn"} onClick={reset}>Reset</button>
                </div>
            </div>
        </>
    )
}