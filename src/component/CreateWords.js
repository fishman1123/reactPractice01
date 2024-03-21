import useFetch from "../hooks/useFetch";
import {useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function CreateWords() {
    const days = useFetch('http://localhost:3001/days');
    const history = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    function onSubmit(e) {
        e.preventDefault();

        console.log(engRef.current.value); //you can get current value by using "current"
        console.log(korRef.current.value);
        console.log(dayRef.current.value);
        if (!isLoading) {
            setIsLoading(true);

            fetch(`http://localhost:3001/words/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day: dayRef.current.value,
                    eng: engRef.current.value,
                    kor: korRef.current.value,
                    isDone: false
                }),
            }).then(res => {
                if (res.ok) {
                    alert("단어 생성이 완료 되었습니다")
                    history(`/day/${dayRef.current.value}`)
                    setIsLoading(false);
                }
            })
        }
    }

    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return <form onSubmit={onSubmit}>
        <div className="input_area">
            <label>Eng</label>
            <input type="text" placeholder="Write english Vocab on this space bitch" ref={engRef}/>
        </div>
        <div className="input_area">
            <label>Kor</label>
            <input type="text" placeholder="위에 작성한 영어단어 뜻을 작성해주시길 바랍니다" ref={korRef}/>
        </div>
        <div className="input_area">
            <label>Day</label>
            <select ref={dayRef}>
                {days.map(day => (
                    <option key={day.id} value={day.day}>{day.day}</option>
                ))}
            </select>
        </div>
        <button style={{opacity: isLoading ? 0.3 : 1,}}>{isLoading ? "Saving in process so Don't fucking click it" : "저장"}</button>
    </form>
}