import React, {useState} from 'react';
import './App.css';
import {ColumnHeader} from "./columnData/columnHeader";

function App() {
    const [edit, setEdit] = useState(true)
    return (
        <div className="App">
            <ColumnHeader />
            {/*<ListEmployee />*/}
            {/*{*/}
            {/*    edit && <Calendar/>*/}
            {/*}*/}

        </div>
    );
}

export default App;
