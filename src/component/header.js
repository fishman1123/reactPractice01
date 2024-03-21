import {Link} from "react-router-dom";

export default function Header() {
    return <div className="header">
        <h1>
            <Link to="/">오픽 영단어(최고급)</Link>
        </h1>
        <div className="menu">
            <Link to="/create_word" className="link">
                단어추가
            </Link>
            <Link to="/create_day" className="link">
                Day 추가
            </Link>
        </div>
    </div>
}