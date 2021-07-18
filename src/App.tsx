import React, {useState} from 'react';
import './App.css';
import {Calendar} from "./calendar/calendar";
import {ListEmployee} from "./listEmployee/listEmployee";

function App() {
    const [edit, setEdit] = useState(true)
    return (
        <div className="App">
            <ListEmployee />
            {/*{*/}
            {/*    edit && <Calendar/>*/}
            {/*}*/}

        </div>
    );
}

export default App;
