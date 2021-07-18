import React, {useState} from 'react';
import './App.css';
import {Calendar} from "./calendar/calendar";

function App() {
    const [edit, setEdit] = useState(true)
    return (
        <div className="App">

            {
                edit && <Calendar/>
            }

        </div>
    );
}

export default App;
