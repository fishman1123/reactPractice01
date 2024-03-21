import {useParams} from "react-router-dom";
import Word from "./Word";
import useFetch from "../hooks/useFetch";

export default function Day() {
    const day = useParams().day;
    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return <>
            <h2>Day {day}</h2>
        {words.length === 0 && <span>just wait brother...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id}></Word>
                    ))}
                </tbody>
            </table>
        </>
}