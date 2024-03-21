import './App.css';
import Day from './component/Day';
import DayList from './component/dayList';
import Header from './component/header';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import EmptyPage from "./component/EmptyPage";
import CreateWords from "./component/CreateWords";

function App() {
    return (
        <BrowserRouter>
        <div className='App'>

            <Header></Header>
                <Routes>
                    <Route path="/" element={<DayList/>} />
                    <Route path="/day/:day" element={<Day/>} />
                    <Route path="*" element={<EmptyPage/>} />
                    <Route path="/create_word" element={<CreateWords/>} />
                </Routes>
        </div>
        </BrowserRouter>
    );
}

export default App;
