
import { useState, useEffect } from 'react';
import Requests from '../../api/requests';
import { Link } from 'react-router-dom';
import './Timer.css'
const Timer = (props) => {
    // Unix timestamp (in miliseconds) to count down to
    const [day, setDay] = useState(props.format.day);
    const [hour, setHour] = useState(props.format.hour);
    const [minutes, setMinutes] = useState(props.format.minutes);
    const [seconds, setSeconds] = useState(props.format.seconds);
    // console.log(props)
    const fetchTime = async () => {
        await Requests.time()
            .then((res) => {
                // console.log(res)
                props.fetchTimeHome();
            }

            )
            .catch((err) => console.log(err))

    }
    useEffect(() => {
        let curr = props.time;
        curr -= Date.now();
        // console.log(curr);      
        if (curr <= 0) {
            fetchTime();
            return;
        }
        // fetchTime();
        const interval = setInterval(() => {
            curr--;
            let cal = Math.floor((curr / 1000) % 60);
            // console.log('In interval here',eventDate, seconds,minutes,hour,day, cal);
            setSeconds(cal < 10 ? '0' + cal.toString() : cal.toString());
            cal = Math.floor((curr / (1000 * 60)) % 60);
            setMinutes(cal < 10 ? '0' + cal.toString() : cal.toString());
            cal = Math.floor((curr / (1000 * 60 * 60)) % 24);
            setHour(cal < 10 ? '0' + cal.toString() : cal.toString());
            cal = Math.floor((curr) / (1000 * 60 * 60 * 24));
            setDay(cal < 10 ? '0' + cal.toString() : cal.toString());
        }, 1000);
        return () => clearInterval(interval);
    }, [day, hour, minutes, seconds]) // eslint-disable-line react-hooks/exhaustive-deps
    return (
        <div className='timer'>
            {/* <p class="mr-3 ml-2 mt-3 mb-2" style={{color:'yellow',fontSize:'15px'}}>Hunt Begins In  </p> */}
            <p class=" mr-3 ml-2 mt-3 mb-2 " className='format' style={{ color: 'yellow' }}>Days   Hours   Minutes    Seconds</p>
            <p class="mr-3 ml-2 mt-3 mb-2" className='date' style={{ color: 'yellow' }}>{day}:{hour}:{minutes}:{seconds}</p>
            {
                props.display === 'start'
                    ?
                    <Link to={props.loginStatus === true ? "/instructions" : "/login"}>

                        <button className="mr-3 ml-2 mt-2 mb-2 hunt-button ">
                            Start Hunting
                        </button>
                    </Link>
                    :
                    <Link to="/instructions">
                        <button className="mr-3 ml-2 mt-2 mb-2 inst-btn">
                            Instructions
                        </button>
                    </Link>
            }

        </div>
    )
}

export default Timer;